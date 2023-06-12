import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import * as config from 'config';
import { Injectable } from '@nestjs/common';
const googleAuthConfig = config.get('googleAuth');

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: googleAuthConfig.clientID,
      clientSecret: googleAuthConfig.clientSecret,
      callbackURL: googleAuthConfig.callbackURL,
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);
  }
}
