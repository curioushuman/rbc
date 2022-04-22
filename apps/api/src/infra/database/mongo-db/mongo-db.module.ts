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
        const n = process.env.RBC_RELEASE_NAME;
        const ns = process.env.RBC_RELEASE_NAMESPACE;
        const port = process.env.RBC_API_MONGODB_SERVICE_PORT_MONGODB;
        return {
          uri: `mongodb://${u}:${p}@${n}-mongodb.${ns}.svc.cluster.local:${port}/${db}`,
        };
      },
    }),
  ],
  providers: [MongoDbService],
  exports: [MongoDbService],
})
export class MongoDbModule {}
