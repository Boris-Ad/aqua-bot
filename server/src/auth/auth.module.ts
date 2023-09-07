import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfig } from './configs/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AdminModule,PassportModule, JwtModule.registerAsync({ imports: [ConfigModule], inject: [ConfigService], useFactory: jwtConfig })],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,ConfigService],
})
export class AuthModule {}
