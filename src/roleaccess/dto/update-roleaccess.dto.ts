import { PartialType } from '@nestjs/swagger';
import { CreateRoleaccessDto } from './create-roleaccess.dto';

export class UpdateRoleaccessDto extends PartialType(CreateRoleaccessDto) {}
