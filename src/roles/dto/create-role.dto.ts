//admin will be defined by the system side or else diffrent login panel for admin
//for user by default, they are of user right while registering


import { ApiProperty } from '@nestjs/swagger'; 
export class CreateRoleDto {
    @ApiProperty() //just for swagger api documentation
    id: number;  
  @ApiProperty() //just for swagger api documentation
   roles: string;
   @ApiProperty() //just for swagger api documentation
   createdDate: string;
   @ApiProperty() //just for swagger api documentation
   updatedDate: string;
}
