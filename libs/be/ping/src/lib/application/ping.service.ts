import { Injectable } from '@nestjs/common';

import type { Ping } from '../core/ping';
import { PingPong } from '../core/ping';

@Injectable()
export class PingService {
  getPing(): Ping {
    return PingPong.Ping;
  }
}
