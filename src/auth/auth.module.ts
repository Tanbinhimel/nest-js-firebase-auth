import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google/google.strategy';
import { GoogleAuthGuard } from './google/google.auth-guard';
import { GoogleService } from './google/google.service';

@Module({
  providers: [AuthService, GoogleStrategy, GoogleAuthGuard, GoogleService],
  controllers: [AuthController],
})
export class AuthModule {}
