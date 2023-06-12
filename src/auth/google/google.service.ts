import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
  constructor() {}

  public async validateUser(details: any) {
    console.log(details);
    // do db query to find user
    return details || null;
  }

  findUser(id) {
    return { id: 1, email: 'ruhimel@ruhimel.com' };
  }
}
