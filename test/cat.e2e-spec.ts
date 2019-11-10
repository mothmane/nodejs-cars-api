import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { CarsModule } from '../src/cars-module/cars.module';

describe('CatController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CarsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /cars ', () => {
    return request(app.getHttpServer())
      .get('/cars')
      .expect(200);
     
  });

  it('GET /cars/:id ', () => {
    return request(app.getHttpServer())
      .get('/cars/OIUA')
      .expect(200);
     
  });

  it('POST /cars ', () => {
    return request(app.getHttpServer())
      .post('/cars')
      .expect(201);
     
  });

  it('PUT /cars ', () => {
    return request(app.getHttpServer())
      .put('/cars')
      .expect(200);
     
  });

  it('GET /cars/ ', () => {
    return request(app.getHttpServer())
      .get('/cars/OIUA/owners')
      .expect(200);
     
  });

  it('GET /cars/ ', () => {
    return request(app.getHttpServer())
      .get('/cars/OIUA/manufacturer')
      .expect(200);
     
  });

  it('POST purge-an-discount/start', () => {
    return request(app.getHttpServer())
      .post('purge-an-update/start')
      .expect(204);
     
  });
});
