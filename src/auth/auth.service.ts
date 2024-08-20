<<<<<<< HEAD
import { Injectable, UnauthorizedException } from '@nestjs/common';
=======
import { Injectable } from '@nestjs/common';
>>>>>>> 388eed1 (Initial commit)
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
<<<<<<< HEAD
    return null;
=======
    return { message: 'Invalid username or password' };
>>>>>>> 388eed1 (Initial commit)
  }

  async login(username: string, password: string): Promise<any> {
    const user = await this.validateUser(username, password);
    if (!user) {
<<<<<<< HEAD
      throw new UnauthorizedException('Invalid username or password');
=======
        return { message: 'idi naxuy' };;
>>>>>>> 388eed1 (Initial commit)
    }
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
