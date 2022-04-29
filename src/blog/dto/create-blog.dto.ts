
import { ApiProperty } from '@nestjs/swagger';

// model Blog {
//   postId  Int @id @default(autoincrement())
//   text    String
//   likes   Int
//   reposts Int
// }

export class CreateBlogDto {
  @ApiProperty({
    description: 'Blog post text',
    default: "example@mail.com",
    type: String,
  })
  text: string;

  @ApiProperty({
    description: 'Likes',
    default: 0,
    type: Number,
  })
  likes: string;

  @ApiProperty({
    description: 'Reposts',
    default: 0,
    type: Number,
  })
  reposts: string;
}
