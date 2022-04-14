import { INestApplication, ValidationPipe } from '@nestjs/common';

export class Bootstrap {
  public static useGlobalSettings(app: INestApplication) {
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
  }
}
