import { ApiProperty } from '@nestjs/swagger';

export class LogRO {
  @ApiProperty({
    description: 'Name, e. g. John Doe',
    default: ["Comment #1", "Comment #2", "Comment #3"],
    type: [String],
  })
  commentHistory: [string];

  @ApiProperty({
    description: 'Date of the last update',
    default: "01.01.2022",
    type: Date,
  })
  lastUpdated: Date;
}