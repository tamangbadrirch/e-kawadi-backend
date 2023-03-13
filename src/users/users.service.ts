import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  //on constructer we inject user model instance to intract with users collection in db
  constructor(
@InjectModel(User.name) private userModal:Model<User>,
  ){}
  create(createUserDto: CreateUserDto) {
    const user = this.userModal.create({
      userType:createUserDto.userType,
      firstName:createUserDto.firstName,
      lastName:createUserDto.lastName,
      phone:createUserDto.phone,
      address:createUserDto.address,
      // username:new Date().toISOString(),
      username:createUserDto.userName,
      email:createUserDto.email,
      password:createUserDto.password
    });
  
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
