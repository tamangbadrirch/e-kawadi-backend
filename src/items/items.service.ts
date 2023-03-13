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
    const user = this.itemModal.create({
      categoryName:createItemDto.categoryName,
      items:createItemDto.items
    });
  
    return Items;
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
