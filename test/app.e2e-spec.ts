import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

<<<<<<< HEAD
  beforeAll(async () => {
=======
  beforeEach(async () => {
>>>>>>> 388eed1 (Initial commit)
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
<<<<<<< HEAD

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpass' })
      .expect(201) // Или другой ожидаемый статус
      .expect(response => {
        expect(response.body).toHaveProperty('access_token');
      });
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(response => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/posts/create (POST)', () => {
    return request(app.getHttpServer())
      .post('/posts/create')
      .send({ title: 'New Post', content: 'Post content', userId: 1 })
      .expect(201)
      .expect(response => {
        expect(response.body).toHaveProperty('id');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
=======
});
>>>>>>> 388eed1 (Initial commit)
