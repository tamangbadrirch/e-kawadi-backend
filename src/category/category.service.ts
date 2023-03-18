import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryService {
  //on constructer we inject user model instance to intract with users collection in db
  constructor(
@InjectModel(Category.name) private categoryModal:Model<Category>,
  ){}
  create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryModal.create({
      category:createCategoryDto.category,
     
    });
    return category;
  }

  findAll() {
    return this.categoryModal.find({}).exec();
  }

  findOne(id: string) {
    return this.categoryModal.findOne({_id:id})
  }

  //updaet api reamian
 async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category=await this.categoryModal.findOne({_id:id})
    if(category){
      category.category=updateCategoryDto.category??category.category
     await category.save()
    }
    return category;
  }


  //delete api remain
 async remove(id: string) {
    // this.categoryModal.deleteOne({_id:id});
    // this.categoryModal.findOneAndDelete({_id:id})
    const category=await this.categoryModal.findOne({_id:id})
    if(category){
      category.delete()
    }
    return category;
  }
}
