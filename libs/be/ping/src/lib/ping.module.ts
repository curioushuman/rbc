import { Module } from '@nestjs/common';

import { PingController } from './infra/ping.controller';
import { PingService } from './application/ping.service';

@Module({
  controllers: [PingController],
  providers: [PingService],
  exports: [PingService],
})
export class PingModule {}
