import { ApiProperty } from '@nestjs/swagger'; 

//input data that might come from frontend
export class CreateUserDto {
    @ApiProperty() //just for swagger api documentation
    userType: string;
    @ApiProperty() 
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    userName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
  }
  