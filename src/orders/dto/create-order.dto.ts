import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
export class CreateOrderDto {
    // @ApiProperty() //just for swagger api documentation
    // id: number;  
  @ApiProperty() //just for swagger api documentation
    category: string;
    @ApiProperty()
    item: string;
    @ApiProperty() //just for swagger api documentation
    pickupDate: Date;
    @ApiProperty()
    pickupTime: Date;
    @ApiProperty()
    pickupLocation: string;
    @ApiProperty()
    paymentMethod: string;
    @ApiPropertyOptional({default:new Date()}) //just for swagger api documentation
    createdDate: Date;
    @ApiPropertyOptional() //just for swagger api documentation
    updatedDate: Date;
       
}