import { Injectable } from '@nestjs/common';

// import type { User } from '../../domain/entities/user';

@Injectable()
export class CreateUserService {
  async execute(): Promise<void> {
    console.log('CreateUserService.execute()');
    return;
  }
}
