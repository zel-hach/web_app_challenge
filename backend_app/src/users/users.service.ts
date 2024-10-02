import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

import { genSalt, hash } from 'bcrypt';
import { Users } from './entities/user.entity';



@Injectable()
export class UserService {
  constructor(@InjectRepository(Users)
  private readonly userRepository: Repository<Users>,) { }

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.findUser(createUserDto.email);
    if (existUser)
      return (0);
    const salt = await genSalt();
    createUserDto.password = await hash(createUserDto.password, salt);
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findUser(email: any): Promise<Users | undefined> {
    const options: FindOneOptions<Users> = { where: { email: email } }
    return this.userRepository.findOne(options);
  }

  async findOne(userId: number): Promise<Users | undefined> {
    const options: FindOneOptions<Users> = {
      where: { id: userId },
    }
    return this.userRepository.findOne(options);
  }

  async getAllUser(): Promise<Users[]> {
    return this.userRepository.find();

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  findAll() {
    return { message: 'This action returns all U' };
  }
}