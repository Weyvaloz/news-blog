import { Controller, Get, Post, Body, Param,  Req, UseGuards  } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Postentity } from '../posts/entities/post/post';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() body: { title: string; content: string;}, @Req() req: any) {
    const userId = req.user.Id;
    return this.postsService.create (body.title, body.content, userId);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(Number(id));
  }
}
