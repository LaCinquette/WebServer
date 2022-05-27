import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumberString } from 'class-validator';
import { Status } from '@prisma/client';

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
//   projectId   Int      @id @default(autoincrement())
//   title       String   
//   description String   @db.VarChar(1000)
//   startDate   DateTime @default(now())
//   status      Status   @default(REGISTERED)
//   clientId    String
//   Log         Log?
// }

export class CreateProjectDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title',
    default: "Project title",
    type: String,
  })
  title: string;
  
  @IsNotEmpty()
  @ApiProperty({
    description: 'Description',
    default: "Project description, maximum characters of 1000",
    type: String,
  })
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    description: 'ID of the client',
    default: "1",
    type: String,
    
  })
  clientId: string;

  @ApiProperty({
      description: 'Current status of the project',
      default: Status.REGISTERED,
      enum: Status,
      enumName: "Project status",
      required: false
  })
  status?: Status;

  @ApiProperty({
      description: 'Start date',
      default: "01.01.2022",
      type: Date,
      required: false
  })
  startDate?: Date;
}