import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MongoDbService } from './mongo-db.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        // TODO implement using a configFactory
        const db = process.env.RBC_MONGODB_DATABASE;
        const u = process.env.RBC_MONGODB_USERNAME;
        const p = process.env.RBC_MONGODB_PASSWORD;
        return {
          uri: `mongodb://${u}:${p}@rbc-api-mongodb.rbc.svc.cluster.local:27017/${db}`,
        };
      },
    }),
  ],
  providers: [MongoDbService],
  exports: [MongoDbService],
})
export class MongoDbModule {}
