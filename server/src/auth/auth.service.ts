import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminService, private jwtService: JwtService) {}

  async validateAdmin(login: string, password: string): Promise<string> | null {
    const admin = await this.adminService.findAdminByLogin(login);
    if (!admin) return null;

    const isMatch = await bcrypt.compare(password, admin.password);
    if (admin && isMatch) {
      return login;
    }
    return null;
  }

  async login(login: string): Promise<any> {
    const payload = { login };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
