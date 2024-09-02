
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Postentity } from '../posts/entities/post/post';
import { User } from '../users/entities/user/user'; 

@Module({
  imports: [TypeOrmModule.forFeature([Postentity, User])], 
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
