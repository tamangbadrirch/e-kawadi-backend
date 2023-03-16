import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateCategoryDto {
 
  
   @ApiProperty() //just for swagger api documentation
    category: string;

    @ApiPropertyOptional({default:new Date()}) //just for swagger api documentation
    createdDate: Date;

    @ApiPropertyOptional() //just for swagger api documentation
    updatedDate: Date;
    
  }
  