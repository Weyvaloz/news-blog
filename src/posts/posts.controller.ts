<<<<<<< HEAD
import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Postentity } from '../posts/entities/post/post';
import { AuthGuard } from '@nestjs/passport';
=======
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Postentity } from '../posts/entities/post/post';


>>>>>>> 388eed1 (Initial commit)

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

<<<<<<< HEAD
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Body() body: { title: string; content: string }, @Request() req) {
    const userId = req.user.id; 
    return this.postsService.create({ title: body.title, content: body.content }, userId);
=======
  @Post()
  create(@Body() body: { title: string; content: string; userId: number }) {
    const { title, content, userId } = body; 
    return this.postsService.create({ title, content }, userId); 
>>>>>>> 388eed1 (Initial commit)
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(Number(id));
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 388eed1 (Initial commit)
