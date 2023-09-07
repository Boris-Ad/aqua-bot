import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: UserDto): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async getUser(telegId: number): Promise<User> {
    return this.prisma.user.findFirst({ where: { telegId } });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async updateUser(data: UserDto): Promise<User> {
    return this.prisma.user.update({ where: { telegId: data.telegId }, data });
  }
}
