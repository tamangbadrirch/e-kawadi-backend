import { PartialType } from '@nestjs/swagger';
import { CreateUsermgmtDto } from './create-usermgmt.dto';

export class UpdateUsermgmtDto extends PartialType(CreateUsermgmtDto) {}
