import { Module } from '@nestjs/common';

import { PingModule } from '@curioushuman/ping';

import { IdentityAndAccessModule } from '../identity-and-access/identity-and-access.module';

@Module({
  imports: [PingModule, IdentityAndAccessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
