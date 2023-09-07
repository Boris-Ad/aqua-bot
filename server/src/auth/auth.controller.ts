import { Controller, Post, Body, BadRequestException, UnauthorizedException,HttpCode } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { Admin, Prisma } from '@prisma/client';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private adminService: AdminService, private authService: AuthService) {}

  @HttpCode(201)
  @Post('register')
  async registration(@Body() data: CreateAdminDto): Promise<Admin> {
    const admin = await this.adminService.getAdmin();
    if (admin.length) {
      throw new BadRequestException('Администратор уже зарегистрирован');
    }
    return this.adminService.createAdmin(data);
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() { login, password }: Prisma.AdminCreateInput): Promise<Admin> {
    const admin = await this.authService.validateAdmin(login, password);

    if (!admin) {
      throw new UnauthorizedException('Данные не верны');
    }
    return this.authService.login(admin);
  }
}
