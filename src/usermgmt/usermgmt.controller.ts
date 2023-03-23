import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsermgmtService } from './usermgmt.service';
import { CreateUsermgmtDto } from './dto/create-usermgmt.dto';
import { UpdateUsermgmtDto } from './dto/update-usermgmt.dto';

@Controller('usermgmt')
export class UsermgmtController {
  constructor(private readonly usermgmtService: UsermgmtService) {}

  @Post()
  create(@Body() createUsermgmtDto: CreateUsermgmtDto) {
    return this.usermgmtService.create(createUsermgmtDto);
  }

  @Get()
  findAll() {
    return this.usermgmtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usermgmtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsermgmtDto: UpdateUsermgmtDto) {
    return this.usermgmtService.update(+id, updateUsermgmtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usermgmtService.remove(+id);
  }
}
