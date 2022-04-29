import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { LogRO } from './log.RO';

@Injectable()
export class LogService {
    async showComments(id: number): Promise<LogRO> {
        throw new NotImplementedException();
    }

    async postComment(createLogDto: CreateLogDto): Promise<CreateLogDto> {
        throw new NotImplementedException();
    }

    async deleteComments(id: number): Promise<LogRO> {
        throw new NotImplementedException();
    }
}
