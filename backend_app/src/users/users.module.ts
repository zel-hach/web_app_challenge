import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserController } from './users.controller';
import { UserService } from './users.service';


@Module({
  controllers: [UserController],
  providers: [UserService, JwtService],
  imports: [TypeOrmModule.forFeature([Users])]

})
export class UsersModule { }