import { Controller, HttpCode, Get } from '@nestjs/common';

import { PingService } from '@curioushuman/ping';

@Controller()
export class AppController {
  constructor(private readonly pingService: PingService) {}

  @Get('ping')
  @HttpCode(200)
  getPing(): string {
    return this.pingService.getPing();
  }
}
