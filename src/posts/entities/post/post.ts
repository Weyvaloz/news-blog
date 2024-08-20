import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../../users/entities/user/user';

@Entity()
export class Postentity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
