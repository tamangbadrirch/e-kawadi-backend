import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  //on constructer we inject user model instance to intract with users collection in db
  constructor(@InjectModel(User.name) private userModal: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto?.password, 10);
    const user = await this.userModal.create({
      userType: createUserDto.userType,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      phone: createUserDto.phone,
      address: createUserDto.address,
      // username:new Date().toISOString(),
      username: createUserDto.userName,
      email: createUserDto.email,

      password: hashPassword,
    });
    const { password, ...rest } = user.toJSON();
    return rest;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneByEmail(email: string) {
    return this.userModal.findOne({ email: email }).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
