import { ApiProperty } from '@nestjs/swagger';

// model Log {
//     logId          Int      @id @default(autoincrement())
//     commentHistory String[]
//     lastUpdated    DateTime @updatedAt
//     project        Project  @relation(fields: [logId], references: [projectId])
// }

export class CreateLogDto {
    @ApiProperty({
        description: 'Log id',
        default: "1",
        type: Number,
    })
    logId: number;

    @ApiProperty({
        description: 'Comment',
        default: "Your initial comment",
        type: String,
    })
    initialComment: string;
}