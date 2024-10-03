import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { genSalt, hash } from 'bcrypt';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findUser(createUserDto.email);
    if (existingUser) return 0; 

    const salt = await genSalt();
    createUserDto.password = await hash(createUserDto.password, salt);
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async findUser(email: string): Promise<Users | undefined> {
    const options: FindOneOptions<Users> = { where: { email } };
    return this.userRepository.findOne(options);
  }

  async findOne(userId: number): Promise<Users | undefined> {
    const options: FindOneOptions<Users> = { where: { id: userId } };
    return this.userRepository.findOne(options);
  }

  async getAllUsers(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
