import { Controller, Get, Post, Body, Patch, Res, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger'; 
import {Response} from 'express';
//all the business logic for user related
//global prefix (employee) for user module
@Controller('category')
@ApiTags('category')

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  
  //  url: http://localhost:5001/category will hit this function using post method
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto,@Res() response:Response) {
    try{
      const allCategory=await this.categoryService.create(createCategoryDto)
      response.send({data:allCategory, message:'Success'}).status(201);
    }catch(e){
      console.log(e)
      response.send({data:null,message:'Internal server error'}).status(500);
    }
    // return this.usersService.create(createUserDto);
  }

//  url: http://localhost:5000/user will hit this function using get method
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

//  url: http://localhost:5000/user/454784848486dd4   will hit this function using get method
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  //  url: http://localhost:5000/user/234343dsdsf will hit this function using patch method
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateUserDto);
  }

  //  url: http://localhost:5000/user/4757478573434 will hit this function using delete method
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
