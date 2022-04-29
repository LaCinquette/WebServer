
import { ApiProperty } from '@nestjs/swagger';

// model Client {
//   id        Int       @id @default(autoincrement())
//   email     String    @unique
//   name      String
//   usernname String    @unique
//   password  String
//   company   String?
//   projects  Project[]
// }

export class CreateClientDto {
  @ApiProperty({
    description: 'Email',
    default: "example@mail.com",
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'Name, e. g. John Doe',
    default: "John Doe",
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Username',
    default: "johndoe",
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'Password',
    default: "qwerty",
    type: String,
  })
  password: string;

  @ApiProperty({
    description: 'Company you are currently working in, can be empty',
    default: "Google",
    type: String,
    required: false
  })
  company?: string;
}
