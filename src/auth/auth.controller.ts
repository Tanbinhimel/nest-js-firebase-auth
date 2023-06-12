import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './google/google.auth-guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {
    return { message: 'google login' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleRedirect() {
    return { message: 'google redirect' };
  }
}
