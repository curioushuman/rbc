import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MongoDbService } from './mongo-db.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        console.log(
          'mongo-uri',
          'mongodb://rbc-api-mongodb.rbc.svc.cluster.local:27017/rbc-api'
        );
        return {
          uri: 'mongodb://rbc-api-mongodb.rbc.svc.cluster.local:27017/rbc-api',
        };
      },
    }),
  ],
  providers: [MongoDbService],
  exports: [MongoDbService],
})
export class MongoDbModule {}
