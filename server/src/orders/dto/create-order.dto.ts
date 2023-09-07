import { IsInt, IsNotEmpty, Max } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  userTelegId: number;

  @IsNotEmpty()
  categoryName: string;

  daily?:boolean

  dailyData?:string

  dailyWeek?:boolean

  @IsNotEmpty()
  address:string
  
  @IsNotEmpty()
  @Max(10)
  bottle5: number;

  @IsNotEmpty()
  @Max(10)
  bottle10: number;
  
  @IsNotEmpty()
  @Max(10)
  bottle20: number;

  @IsNotEmpty()
  price: number;

  saleName?: string;
}
