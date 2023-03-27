import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { UsersModule } from 'src/users/users.module';
@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'local',
    }),
    JwtModule.register({
      secret: process?.env?.jwt_secret || 'secret',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
})
export class AuthModule {
  constructor() {}
}
