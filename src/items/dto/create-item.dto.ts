import { ApiProperty } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateItemDto {
  @ApiProperty() //just for swagger api documentation
    id: number;  
  @ApiProperty() //just for swagger api documentation
    itemName: string;
    // @ApiProperty()
    // units: string;
    // @ApiProperty() //just for swagger api documentation
    // categoryId: number;
    // @ApiProperty()
    // createdDate: string;
    // @ApiProperty()
    // updatedDate: string;
  }
  