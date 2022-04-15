import { Controller, Get, HttpCode, Post } from '@nestjs/common';

// import { UsersQueriesService } from '../application/users-queries.service';
// import { CreateUserService } from '../application/use-cases/create-user.service';
// import type { User } from '../domain/entities/user';

/**
 * ! This may not be necessary, after you have implemented the members module
 * Once CreateMember use case exists, and CreateUser can be based on an event
 * For now we're using this for testing purposes
 */

@Controller('users')
export class UsersController {
  // constructor(private createUserService: CreateUserService) {}

  @Post()
  @HttpCode(201)
  createUser(): Promise<void> {
    // return this.createUserService.execute();
    return Promise.resolve();
  }
}
