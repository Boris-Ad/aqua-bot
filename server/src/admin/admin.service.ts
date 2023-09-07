import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Admin, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getAdmin(): Promise<Admin[]> {
    return this.prisma.admin.findMany();
  }

  async findAdminByLogin(login: string): Promise<Admin> {
    return this.prisma.admin.findFirst({ where: { login } });
  }

  async createAdmin({ login, password }: { login: string; password: string }) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return this.prisma.admin.create({ data: { login, password: hash } });
  }
}
