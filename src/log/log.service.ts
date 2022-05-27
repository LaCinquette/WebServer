import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLogDto } from './dto/create-log.dto';
import { LogRO } from './log.RO';

@Injectable()
export class LogService {
    constructor(private prisma: PrismaService) {}

    async showComments(logId: number): Promise<LogRO> {
        return await this.prisma.log.findUnique({
            where: {
                logId
            }
        });
    }

    async createComments(createLogDto: CreateLogDto): Promise<CreateLogDto> {
        return await this.prisma.log.create({
            data: createLogDto
        });
    }

    async deleteComments(logId: number): Promise<LogRO> {
        return await this.prisma.log.delete({
            where: {
                logId
            }
        });
    }
}
