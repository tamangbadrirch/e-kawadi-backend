import { ApiProperty } from '@nestjs/swagger'; 
export class CreateOrderDto {
    @ApiProperty() //just for swagger api documentation
    id: number;  
  @ApiProperty() //just for swagger api documentation
    orderDate: string;
    @ApiProperty()
    orderBy: string;
    @ApiProperty() //just for swagger api documentation
    orderStatus: string;
    @ApiProperty()
    paymentId: number;
    @ApiProperty()
    itemsId: number;
    @ApiProperty()
    userId: number;
    @ApiProperty()
    createdDate: string;
    @ApiProperty()
    udpatedDate: string;



    
}
