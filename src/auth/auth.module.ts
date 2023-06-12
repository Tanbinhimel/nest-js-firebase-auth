import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google/google.strategy';
import { GoogleAuthGuard } from './google/google.auth-guard';
import { GoogleService } from './google/google.service';
import { SessionSerializer } from './serializer/session.serializer';

@Module({
  providers: [
    AuthService,
    GoogleStrategy,
    GoogleAuthGuard,
    GoogleService,
    SessionSerializer,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
