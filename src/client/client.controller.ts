import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ClientRO } from './client.RO';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@ApiTags('client')
@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {};

    @Get('get/:name')
    @ApiParam({
        name: "name",
        type: String
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Search results',
        type: [ClientRO],
    })
    async findAll(@Param('name') name: string): Promise<ClientRO[]>{
        return await this.clientService.findAll(name);
    };

    @Post('post')
    @ApiBody({ type: CreateClientDto })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully created.',
        type: CreateClientDto,
    })
    async create(@Body() createClientDto: CreateClientDto): Promise<CreateClientDto> {
        return await this.clientService.create(createClientDto);
    };

    @Delete('delete')
    @ApiQuery({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully removed.',
        type: CreateClientDto,
    })
    async remove(@Query('id') id: number): Promise<CreateClientDto> {
        return await this.clientService.remove(id);
    };
}
