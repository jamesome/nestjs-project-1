import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
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

  it('/{id} (GET)', () => {
    return request(app.getHttpServer())
      .get('/2323')
      .expect(200)
      .expect('id 받기 => 2323');
  });

  it('/req (GET)', () => {
    return request(app.getHttpServer()).get('/req').expect(200);
  });
});
