import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleaccessService } from './roleaccess.service';
import { CreateRoleaccessDto } from './dto/create-roleaccess.dto';
import { UpdateRoleaccessDto } from './dto/update-roleaccess.dto';

@Controller('roleaccess')
export class RoleaccessController {
  constructor(private readonly roleaccessService: RoleaccessService) {}

  @Post()
  create(@Body() createRoleaccessDto: CreateRoleaccessDto) {
    return this.roleaccessService.create(createRoleaccessDto);
  }

  @Get()
  findAll() {
    return this.roleaccessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleaccessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleaccessDto: UpdateRoleaccessDto) {
    return this.roleaccessService.update(+id, updateRoleaccessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleaccessService.remove(+id);
  }
}
