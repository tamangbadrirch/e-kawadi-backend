import { Injectable } from '@nestjs/common';
import { CreateUsermgmtDto } from './dto/create-usermgmt.dto';
import { UpdateUsermgmtDto } from './dto/update-usermgmt.dto';

@Injectable()
export class UsermgmtService {
  create(createUsermgmtDto: CreateUsermgmtDto) {
    return 'This action adds a new usermgmt';
  }

  findAll() {
    return `This action returns all usermgmt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usermgmt`;
  }

  update(id: number, updateUsermgmtDto: UpdateUsermgmtDto) {
    return `This action updates a #${id} usermgmt`;
  }

  remove(id: number) {
    return `This action removes a #${id} usermgmt`;
  }
}
