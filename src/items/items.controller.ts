import { Controller, Get, Post, Body, Patch, Res, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiTags } from '@nestjs/swagger'; 
import {Response} from 'express';
//all the business logic for user related
//global prefix (employee) for user module
@Controller('items')
@ApiTags('items')

export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  
  //  url: http://localhost:5000/employee will hit this function using post method
  @Post()
  async create(@Body() createItemDto: CreateItemDto,@Res() response:Response) {
    try{
      const allItems=await this.itemsService.create(createItemDto)
      response.send({data:allItems, message:'Success!'}).status(201);
    }catch(e){
      console.log(e)
      response.send({data:null,message:'Internal server error!!'}).status(500);
    }
    // return this.usersService.create(createUserDto);
  }

//  url: http://localhost:5001/items will hit this function using get method
  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

//  url: http://localhost:5000/user/454784848486dd4   will hit this function using get method
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  //  url: http://localhost:5000/user/234343dsdsf will hit this function using patch method
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  //  url: http://localhost:5001/items/4757478573434 will hit this function using delete method
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
