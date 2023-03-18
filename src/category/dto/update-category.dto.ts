import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

   

}
