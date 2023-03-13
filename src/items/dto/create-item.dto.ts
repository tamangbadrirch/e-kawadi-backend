import { ApiProperty } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateItemDto {
    @ApiProperty() //just for swagger api documentation
    categoryName: string;
    @ApiProperty()
    items: string;
  }
  