import { Module } from '@nestjs/common';

import { PingModule } from '@curioushuman/ping';

import { MongoDbModule } from '../infra/database/mongo-db/mongo-db.module';
import { IdentityAndAccessModule } from '../identity-and-access/identity-and-access.module';

@Module({
  imports: [IdentityAndAccessModule, MongoDbModule, PingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
