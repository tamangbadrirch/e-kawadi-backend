import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items, ItemsDocument } from './entities/item.entity';

@Injectable()
export class ItemsService {
  //on constructer we inject user model instance to intract with users collection in db
  constructor(
@InjectModel(Items.name) private itemModal:Model<Items>,
  ){}
  create(createItemDto: CreateItemDto) {
    const item = this.itemModal.create({
      categoryId:createItemDto.categoryName,
      itemName:createItemDto.items,
      // unit:createItemDto.unit,
    });
    return item;
  }

  findAll() {
    return this.itemModal.find({}).populate('categoryId').exec();
  }

  findOne(id: string) {
    return this.itemModal.findOne({_id:id})
  }

  //updaet api reamian
 async update(id: string, updateItemDto: UpdateItemDto) {
    const item=await this.itemModal.findOne({_id:id})
    if(item){
    
      item.itemName=updateItemDto.items??item.itemName
      // item.unit=updateItemDto.unit??item.unit
     await item.save()
    }
    return item;
  }


  //delete api remain
 async remove(id: string) {
    // this.categoryModal.deleteOne({_id:id});
    // this.categoryModal.findOneAndDelete({_id:id})
    const item=await this.itemModal.findOne({_id:id})
    if(item){
      item.delete()
    }
    return item;
  }
}


