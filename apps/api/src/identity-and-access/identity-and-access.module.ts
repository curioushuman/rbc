import { Module } from '@nestjs/common';

import { UsersController } from './infra/users.controller';
// import { CreateUserService } from './application/use-cases/create-user.service';
// import { UsersQueriesService } from './application/users-queries.service';

@Module({
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class IdentityAndAccessModule {}
