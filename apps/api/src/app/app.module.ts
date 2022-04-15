import { Module } from '@nestjs/common';

// import { PingModule } from '@curioushuman/ping';

import { AppController } from './app.controller';
// import { IdentityAndAccessModule } from '../identity-and-access/identity-and-access.module';

@Module({
  // imports: [PingModule, IdentityAndAccessModule],
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
