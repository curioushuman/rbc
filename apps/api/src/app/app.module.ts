import { Module } from '@nestjs/common';

import { PingModule } from '@curioushuman/ping';

@Module({
  imports: [PingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
