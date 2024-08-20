import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postentity } from '../posts/entities/post/post';
import { User } from '../users/entities/user/user'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Postentity)
    private postsRepository: Repository<Postentity>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create( title: string, content: string, userId: number): Promise<Postentity> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    const newPost = this.postsRepository.create({
      title, 
      content,
      user: { id: userId}

  });
    newPost.user = user;
    return this.postsRepository.save(newPost);
  }

  findAll(): Promise<Postentity[]> {
    return this.postsRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Postentity> {
    return this.postsRepository.findOne({ where: { id }, relations: ['user'] });
  }
}
