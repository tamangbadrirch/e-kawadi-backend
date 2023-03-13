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
    const user = this.categoryModal.create({
      category:createCategoryDto.category,
     
    });
  
    return Category;
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateUserDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
