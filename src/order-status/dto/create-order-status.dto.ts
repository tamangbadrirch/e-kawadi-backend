import { ApiProperty } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateOrderStatusDto {
  @ApiProperty() //just for swagger api documentation
    id: number;  
  @ApiProperty() //just for swagger api documentation
    orderStatus: string;
    @ApiProperty() //just for swagger api documentation
    createdDate: string;
    @ApiProperty() //just for swagger api documentation
    updatedDate: string;

}
