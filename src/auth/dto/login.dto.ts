import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ default: 'jit2@gmail.com' })
  email: string;
  @ApiProperty({ default: 'jitjit' })
  password: string;
}
