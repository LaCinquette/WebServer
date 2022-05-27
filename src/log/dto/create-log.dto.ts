import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

// model Log {
//     logId          Int      @id @default(autoincrement())
//     commentHistory String[]
//     lastUpdated    DateTime @updatedAt
//     project        Project  @relation(fields: [logId], references: [projectId])
// }

export class CreateLogDto {
    @IsNotEmpty()
    @IsNumberString()
    @ApiProperty({
        description: 'Log id',
        default: "1",
        type: Number,
    })
    logId: number;

    @IsNotEmpty()
    @ApiProperty({
        description: 'Comment',
        default: "Your initial comment",
        type: String,
    })
    commentHistory: string[];
}