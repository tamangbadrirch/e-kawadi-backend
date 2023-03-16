import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateItemDto {
 //only 3 field must come frontend so create a form having only 3field listed below
  @ApiProperty({default:'category name'})
  categoryName: string;

    @ApiProperty()
  item: string;

  @ApiPropertyOptional({default:new Date()}) //just for swagger api documentation
  createdDate: Date;

  @ApiPropertyOptional() //just for swagger api documentation
  updatedDate: Date;


//   @ApiProperty({default:0})
//   units: number;

//   @ApiProperty()
//   categoryId: number;

  }
  