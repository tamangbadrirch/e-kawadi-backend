import { ApiProperty } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateCategoryDto {
  @ApiProperty() //just for swagger api documentation
    id: string;  
  
  @ApiProperty() //just for swagger api documentation
    category: string;

    @ApiProperty() //just for swagger api documentation
    createdDate: string;

    @ApiProperty() //just for swagger api documentation
    updatedDate: string;
    
  }
  