import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
<<<<<<< HEAD
  imports: [AuthModule, UsersModule, PostsModule,
=======
  imports: [AuthModule, UsersModule, PostsModule, 
>>>>>>> 388eed1 (Initial commit)
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
<<<<<<< HEAD
  controllers: [AppController],
  providers: [AppService]
=======
>>>>>>> 388eed1 (Initial commit)

})
export class AppModule {};





