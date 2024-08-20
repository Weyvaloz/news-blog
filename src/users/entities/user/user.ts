import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Postentity } from '../../../posts/entities/post/post';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Postentity, (post) => post.user)
  posts: Postentity[];
}
