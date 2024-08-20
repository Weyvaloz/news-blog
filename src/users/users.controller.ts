import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './userto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':username')
   async findByUsername(@Param('username') username: string) {
    return this.usersService.findByUsername(username)};
  }

  
  
 

