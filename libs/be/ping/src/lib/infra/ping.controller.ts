import { Controller, Get } from '@nestjs/common';

import { PingService } from '../application/ping.service';
import type { Ping } from '../core/ping';

@Controller('ping')
export class PingController {
  constructor(private pingService: PingService) {}

  @Get()
  getPing(): Ping {
    return this.pingService.getPing();
  }
}
