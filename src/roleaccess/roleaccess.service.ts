import { Injectable } from '@nestjs/common';
import { CreateRoleaccessDto } from './dto/create-roleaccess.dto';
import { UpdateRoleaccessDto } from './dto/update-roleaccess.dto';

@Injectable()
export class RoleaccessService {
  create(createRoleaccessDto: CreateRoleaccessDto) {
    return 'This action adds a new roleaccess';
  }

  findAll() {
    return `This action returns all roleaccess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleaccess`;
  }

  update(id: number, updateRoleaccessDto: UpdateRoleaccessDto) {
    return `This action updates a #${id} roleaccess`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleaccess`;
  }
}
