import { ApiProperty } from '@nestjs/swagger';

export class ClientRO {
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
    description: 'Company you are currently working in, can be empty',
    default: "Google",
    type: String,
    required: false
  })
  company?: string;
}