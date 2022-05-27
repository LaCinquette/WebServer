import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
  providers: [LogService, PrismaService],
  controllers: [LogController]
})
export class LogModule {}
