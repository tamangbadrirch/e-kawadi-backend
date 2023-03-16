
//in user side just i'll add the payment page where user can 
//see all total payments till now
//but in admin side, orders, payment all details till date by username

import { ApiProperty } from '@nestjs/swagger'; 
export class CreatePaymentDto {
    @ApiProperty() //just for swagger api documentation
    id: number;  
  @ApiProperty() //just for swagger api documentation
   paidTo: string;

   @ApiProperty() //just for swagger api documentation
   paidDate: string;
   @ApiProperty() //just for swagger api documentation
  totalPayment: string;
  @ApiProperty() //just for swagger api documentation
 paymentMethod: string;
 @ApiProperty() //just for swagger api documentation
 paymentStatus: string;

 @ApiProperty() //just for swagger api documentation
 paymentSlip: string;

 @ApiProperty() //just for swagger api documentation
 createdDate: string;

 @ApiProperty() //just for swagger api documentation
 updatedDate: string;

}
