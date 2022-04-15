import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

// import { PingModule } from '@curioushuman/ping';
import { AppModule } from './app.module';

describe('PingModule', () => {
  let app: INestApplication;
  // disabling no-explicit-any for testing purposes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let httpServer: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      // controllers: [],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('When ping is requested', () => {
    test('Then it should return a Ping', async () => {
      const response = await request(httpServer).get('/ping');

      expect(response.status).toBe(200);
    });
  });
});
