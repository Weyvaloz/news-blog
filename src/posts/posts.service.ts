import { Injectable, NotFoundException} from '@nestjs/common';
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

  async create(post: Partial<Postentity>, userId: number): Promise<Postentity> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    const newPost = this.postsRepository.create(post);
    newPost.user = user;
    return this.postsRepository.save(newPost);
  }
  async updatePost(id: number, updatePostDto: { title?: string; content?: string }): Promise<Postentity> {
    const post = await this.postsRepository.findOne({ where: { id } });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    post.title = updatePostDto.title ?? post.title;
    post.content = updatePostDto.content ?? post.content;

    return await this.postsRepository.save(post);
  }

  async deletePost(id: number): Promise<void> {
    const post = await this.postsRepository.findOne({ where: { id } });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    await this.postsRepository.delete(id);
  }

  findAll(): Promise<Postentity[]> {
    return this.postsRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Postentity> {
    return this.postsRepository.findOne({ where: { id }, relations: ['user'] });
  }
}