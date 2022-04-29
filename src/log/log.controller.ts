import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateLogDto } from './dto/create-log.dto';
import { LogRO } from './log.RO';
import { LogService } from './log.service';

@ApiTags("log")
@Controller('log')
export class LogController {
    constructor(private logService: LogService){};

    @Get('get/:id')
    @ApiParam({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Showed logs by this id',
        type: LogRO,
    })
    async showComments(@Param('id') id: number): Promise<LogRO> {
        return await this.logService.showComments(id);
    };

    @Post('post')
    @ApiBody({ type: CreateLogDto })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Log has been successfully created.',
        type: CreateLogDto,
    })
    async postComment(@Body() createLogDto: CreateLogDto): Promise<CreateLogDto> {
        return await this.logService.postComment(createLogDto);
    };

    @Delete('delete')
    @ApiQuery({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Log has been successfully removed.',
        type: LogRO,
    })
    async removeComment(@Query('id') id: number): Promise<LogRO> {
        return await this.logService.deleteComments(id);
    };
}
