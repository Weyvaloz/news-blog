<<<<<<< HEAD

=======
>>>>>>> 388eed1 (Initial commit)
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt.payload';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jwtsecret', 
    });
  }

  async validate(payload: JwtPayload) {
<<<<<<< HEAD
    const user = await this.usersService.findByUsername(payload.username);
    if (user) {
      return { id: user.id, username: user.username }; // Возвращаем объект с id и username
    }
    return null;
  }
}
=======
    return this.usersService.findByUsername(payload.username);
  }
}
>>>>>>> 388eed1 (Initial commit)
