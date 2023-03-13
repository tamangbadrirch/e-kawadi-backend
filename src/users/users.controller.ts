import { Controller, Get, Post, Body, Patch, Res, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger'; 
import {Response} from 'express';
//all the business logic for user related
//global prefix (employee) for user module
@Controller('users')
@ApiTags('users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  //  url: http://localhost:5000/employee will hit this function using post method
  @Post()
  async create(@Body() createUserDto: CreateUserDto,@Res() response:Response) {
    try{
      const allUsers=await this.usersService.create(createUserDto)
      response.send({data:allUsers, message:'success'}).status(201);
    }catch(e){
      console.log(e)
      response.send({data:null,message:'internal server error'}).status(500);
    }
    // return this.usersService.create(createUserDto);
  }

//  url: http://localhost:5000/user will hit this function using get method
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

//  url: http://localhost:5000/user/454784848486dd4   will hit this function using get method
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  //  url: http://localhost:5000/user/234343dsdsf will hit this function using patch method
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  //  url: http://localhost:5000/user/4757478573434 will hit this function using delete method
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
