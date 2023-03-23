import { Module } from '@nestjs/common';
import { UsermgmtService } from './usermgmt.service';
import { UsermgmtController } from './usermgmt.controller';

@Module({
  controllers: [UsermgmtController],
  providers: [UsermgmtService]
})
export class UsermgmtModule {}
