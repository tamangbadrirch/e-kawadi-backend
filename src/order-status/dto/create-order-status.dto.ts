// Just Retrive the status of particular order which is placed by
// that particular user 
// But in admin side, retrive the order of every user by orderid


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

