import { Controller, Get, Post, Body, Patch, Res, Param, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiTags } from '@nestjs/swagger'; 
import {Response} from 'express';
import { ItemsService } from './items.service';
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
      const items=await this.itemsService.create(createItemDto)
      response.send({data:items, message:'Success!'}).status(201);
    }catch(e){
      console.log(e)
      response.send({data:null,message:'Internal server error!!'}).status(500);
    }
    // return this.usersService.create(createUserDto);
  }

//  url: http://localhost:5001/items will hit this function using get method
@Get()
async findAll(@Res() response:Response) {
   
   try{
     const allItems=await  this.itemsService.findAll();
     response.send({data:allItems, message:'Success'}).status(200);
   }catch(e){
     console.log(e)
     response.send({data:null,message:'Internal server error'}).status(500);
   }
 }


//  url: http://localhost:5000/user/454784848486dd4   will hit this function using get method
@Get(':id')
async findOne(@Param('id') id: string,@Res() response:Response) {
   try{
     const items=await  this.itemsService.findOne(id);
    return response.send({data:items, message:'Success'}).status(201);
   }catch(e){
     console.log(e)
  return   response.send({data:null,message:'Internal server error'}).status(500);
   }
  
 }

  //  url: http://localhost:5000/user/234343dsdsf will hit this function using patch method
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
    @Res() response: Response,
  ) {
    // return this.employeeService.update(+id, updateEmployeeDto);
    try {
      const item = await this.itemsService.update(id, updateItemDto);
      return response
        .send({ data: item, message: 'Successfully updated' })
        .status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'Internal server error' })
        .status(500);
    }
  }

  //  url: http://localhost:5001/items/4757478573434 will hit this function using delete method
   // }
   @Delete(':id')
   async remove(@Param('id') id: string, @Res() response: Response) {
     // return this.employeeService.remove(id);
     try {
       const item = await this.itemsService.remove(id);
       return response
         .send({ data: item, message: 'Successfully deleted!' })
         .status(201);
     } catch (e) {
       response
         .send({ data: null, message: 'Internal Server Error!' })
         .status(500);
     }
   }
}
