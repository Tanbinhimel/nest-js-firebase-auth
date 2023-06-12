import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { GoogleService } from '../google/google.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private googleService: GoogleService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: any, done: Function): any {
    done(null, user);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async deserializeUser(payload: any, done: Function): Promise<any> {
    const user = this.googleService.findUser(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
