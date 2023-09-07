import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  telegId: number;

  avatar?: string;

  name?: string;

  address?: string;
}
