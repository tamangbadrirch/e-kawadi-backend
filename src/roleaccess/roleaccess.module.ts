import { Module } from '@nestjs/common';
import { RoleaccessService } from './roleaccess.service';
import { RoleaccessController } from './roleaccess.controller';

@Module({
  controllers: [RoleaccessController],
  providers: [RoleaccessService]
})
export class RoleaccessModule {}
