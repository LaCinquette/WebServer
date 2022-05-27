
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

// model Client {
//   id        Int       @id @default(autoincrement())
//   email     String    @unique
//   name      String
//   usernname String    @unique
//   password  String
//   company   String?
//   projects  Project[]
// }

export class SignUpDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Client ID',
    default: "4536-11df-1dsf",
    type: String,
    // uniqueItems: true
  })
  clientId: string;
  
  @IsNotEmpty()
  @ApiProperty({
    description: 'Password',
    default: "password123",
    type: String,
  })
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Email',
    default: "example@mail.com",
    type: String,
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Name, e. g. John Doe',
    default: "John Doe",
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Company you are currently working in, can be empty',
    default: "Google",
    type: String,
    required: false
  })
  company?: string;
}

export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Email',
    default: "example@mail.com",
    type: String,
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Password',
    default: "qwerty",
    type: String,
  })
  password: string;
}

export class SupertokensIDs {
  @IsNotEmpty()
  @ApiProperty({
    description: 'UserIDs to delete',
    default: "asd5-fsdf445-xdfc",
    type: [String],
  })
  ids: string[];
}
