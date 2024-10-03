import { Controller, Get, Post, Body, Param, Delete, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';


@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const result = await this.userService.create(createUserDto);
    if (result === 0) {
      throw new InternalServerErrorException('User already exists');
    }
    return { message: 'User registered successfully', user: result };
  }

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.findUser(createUserDto.email);
      if (user && (await compare(createUserDto.password, user.password))) {
        const token = jwt.sign({ email: user.email, sub: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return { message: 'succes',accessTocken:token};
      } else {
        throw new NotFoundException('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error); 
      throw new InternalServerErrorException('Internal server error');
    }
  }
  
  @Get()
  findAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
