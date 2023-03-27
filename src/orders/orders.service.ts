import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrderService {
  //on constructer we inject user model instance to intract with users collection in db
  constructor(
@InjectModel(Order.name) private orderModal:Model<Order>,
  ){}
  create(createOrderDto: CreateOrderDto) {
    const order = this.orderModal.create({
      categoryId:createOrderDto.category,
      itemsId:createOrderDto.items,
      quantity:createOrderDto.quantity,
      unit:createOrderDto.unit,
      pickupDate:createOrderDto.pickupDate,
      pickupTime:createOrderDto.pickupTime,
      pickupLocation:createOrderDto.pickupLocation,
      paymentMethod:createOrderDto.paymentMethod,
       });
    return order;
  }

  findAll() {
    return this.orderModal.find({}).exec();
  }

  findOne(id: string) {
    return this.orderModal.findOne({_id:id})
  }

  //updaet api reamian
 async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order=await this.orderModal.findOne({_id:id})
    if(order){
    
      // order.items=updateOrderDto.items??order.items
         await order.save()
    }
    return order;
  }


  //delete api remain
 async remove(id: string) {
       const order=await this.orderModal.findOne({_id:id})
    if(order){
      order.delete()
    }
    return order;
  }
}
