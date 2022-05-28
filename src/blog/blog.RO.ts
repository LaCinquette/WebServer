import { ApiProperty } from "@nestjs/swagger";

export class BlogRO {
    @ApiProperty({
        description: 'Blog post ID',
        default: "1",
        type: Number,
    })
    postId: number;

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
    likes: number;

    @ApiProperty({
      description: 'Date',
      default: 0,
      type: Date,
    })
    date: Date;
  }