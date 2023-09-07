import { Body, Controller, Post, HttpCode, Get, Req, UnauthorizedException, Put, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() data: UserDto): Promise<any> {
    const user = await this.userService.getUser(data.telegId);
    if (user) throw new UnauthorizedException('Пользователь уже зарегистрирован');
    return this.userService.createUser(data);
  }

  @Get()
  async getUser(@Req() req: Request): Promise<User> {
    const telegId = parseInt(req.headers.authorization);
    if (!telegId) throw new UnauthorizedException('Не получилось авторизоваться с telegram');
    return this.userService.getUser(telegId);
  }

  @Get('/users')
  @UseGuards(JwtAuthGuard)
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Put()
  async updateUser(@Body() data: UserDto): Promise<User> {
    return this.userService.updateUser(data);
  }
}
