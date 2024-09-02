import { Controller, Get, Post, Body, Param, UseGuards, Request, Patch, Delete, ForbiddenException} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Postentity } from '../posts/entities/post/post';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Body() body: { title: string; content: string }, @Request() req) {
    const userId = req.user.id; 
    return this.postsService.create({ title: body.title, content: body.content }, userId);
  }


  @Patch(':id')
  @UseGuards(JwtAuthGuard) 
  async updatePost(
    @Param('id') id: string, 
    @Body() updatePostDto: { title?: string; content?: string },
    @Request() req
  ) {
    const post = await this.postsService.findOne(+id);
    if (post.user.id !== req.user.id) {
      throw new ForbiddenException('Вы не являетесь владельцем этого поста');
    }
    return await this.postsService.updatePost(+id, updatePostDto);
  }


  @Delete(':id')
@UseGuards(JwtAuthGuard)
async deletePost(@Param('id') id: string, @Request() req) {
  const post = await this.postsService.findOne(+id);

  if (post.user.id !== req.user.id) {
    throw new ForbiddenException('Вы не являетесь владельцем этого поста');
  }

  return await this.postsService.deletePost(+id);
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