import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import * as config from 'config';
import { Injectable } from '@nestjs/common';
import { GoogleService } from './google.service';
const googleAuthConfig = config.get('googleAuth');

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private googleService: GoogleService) {
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
    const user = await this.googleService.validateUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
    if (user) return user;
    console.log('create new user...');
    // create new user
    // return user || null;
  }
}
