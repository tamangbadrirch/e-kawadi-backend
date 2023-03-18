import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateItemDto {
 //only 3 field must come frontend so create a form having only 3field listed below
  @ApiProperty({default:'category name'})
  categoryName: string;

  @ApiProperty()
  items: string;

  


  }
  