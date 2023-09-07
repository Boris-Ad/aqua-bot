import { IsString, Length } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  login: string;

  @Length(5, 20)
  password: string;
}
