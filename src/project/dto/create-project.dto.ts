import { ApiProperty } from '@nestjs/swagger';

// enum Status {
//     REGISTERED
//     INPROCESS
//     DONE
// }

export enum ProjectStatus{
    REGISTERED = "Registered",
    INPROCESS = "In process",
    DONE = "Done"
}

// model Project {
//     projectId   Int      @id @default(autoincrement())
//     description String   @db.VarChar(1000)
//     startDate   DateTime @default(now())
//     status      Status   @default(REGISTERED)
//     clientId    Int
//     client      Client   @relation(fields: [clientId], references: [id])
//     Log         Log?
// }

export class CreateProjectDto {
    @ApiProperty({
      description: 'Description',
      default: "Project description, maximum characters of 1000",
      type: String,
    })
    description: string;
  
    
    @ApiProperty({
      description: 'ID of the client',
      default: "1",
      type: Number,
      
    })
    clientId: number;

    @ApiProperty({
        description: 'Current status of the project',
        default: ProjectStatus.REGISTERED,
        enum: ProjectStatus,
        enumName: "Project status",
        required: false
    })
    status?: ProjectStatus;

    @ApiProperty({
        description: 'Start date',
        default: "01.01.2022",
        type: Date,
        required: false
    })
    startDate?: Date;
}