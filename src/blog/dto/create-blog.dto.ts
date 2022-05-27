
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

// model Blog {
//   postId  Int      @id @default(autoincrement())
//   title   String
//   text    String
//   date    DateTime @default(now())
//   likes   Int      @default(0)
//   reposts Int      @default(0)
// }

export class CreateBlogDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Blog post title',
    default: "Title",
    type: String,
  })
  title: string;
  
  @IsNotEmpty()
  @ApiProperty({
    description: 'Blog post text',
    default: "Sample text",
    type: String,
  })
  text: string;

  @ApiProperty({
    description: 'Blog post date',
    default: "01.01.2022",
    type: Date,
    required: false
  })
  date?: Date;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    description: 'Likes',
    default: 0,
    type: Number,
  })
  likes: number;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    description: 'Reposts',
    default: 0,
    type: Number,
  })
  reposts: number;
}
