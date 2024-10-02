import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Res, InternalServerErrorException, UnauthorizedException, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { compare} from 'bcrypt';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private jwtService: JwtService) { }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return (await this.userService.create(createUserDto));
  }

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.findUser(createUserDto.email);
      if (user && await compare(createUserDto.password, user.password)) {
        return {
          message: "succes",
          user: user,
        };
      }
      else
        throw new NotFoundException('User not found');
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
  @Get('/register')
  findAllRegister() {
    return this.userService.getAllUser();
  }

  // @Get('/login')
  // async user(@Req() request: Request) {
  //   try {
  //     const cookie = await request.cookies['jwt'];
  //     const data = await this.jwtService.verifyAsync(cookie, { secret: 'secret' });
  //     if (!data) {
  //       throw new UnauthorizedException();
  //     }
  //     return data;
  //   }
  //   catch (e) {
  //     throw new UnauthorizedException();
  //   }
  // }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}