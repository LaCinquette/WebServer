import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { ClientRO } from 'src/client/client.RO';
import { LogRO } from 'src/log/log.RO';
import { ProjectStatus } from './dto/create-project.dto';

export class ProjectRO {
    @ApiProperty({
        description: 'Description',
        default: "Project description, maximum characters of 1000",
        type: String,
    })
    description: string;

    
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
    })
    startDate: Date;

    @ApiProperty({
        description: 'Log of project, may not exist',
        default: "{\ncommentHistory: [\n\"Comment #1\",\n\"Comment #2\",\n\"Comment #3\"\n],\nlastUpdated: \"01.01.2022\"\n}",
        type: LogRO,
        required: false
    })
    log?: LogRO;
}