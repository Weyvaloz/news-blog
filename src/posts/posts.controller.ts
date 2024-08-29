import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Postentity } from '../posts/entities/post/post';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Body() body: { title: string; content: string }, @Request() req) {
    const userId = req.user.id; 
    return this.postsService.create({ title: body.title, content: body.content }, userId);
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