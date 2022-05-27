import { Body, Controller, Delete, Get, Param, Post, Query, Render, UseFilters, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiCookieAuth, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/admin.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { Session } from 'src/auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { ClientRO } from './client.RO';
import { ClientService } from './client.service';
import { SignUpDto, SignInDto, SupertokensIDs } from './dto/create-client.dto';
import { NoClientsFoundFilter } from './no-clients-found.filter';

@ApiTags('client')
@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {};

    @Get('get/:name')
    @UseFilters(new NoClientsFoundFilter())
    @ApiParam({
        name: "name",
        type: String
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Search results',
        type: [ClientRO],
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async findAll(@Param('name') name: string): Promise<ClientRO[]>{
        return await this.clientService.findAll(name);
    };

    @Post('post')
    @ApiBody({ type: SignUpDto })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully created.',
        type: SignUpDto,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async create(@Body() createClientDto: SignUpDto): Promise<SignUpDto> {
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
        type: SignUpDto,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async remove(@Query('id') id: number): Promise<SignUpDto> {
        return await this.clientService.remove(id);
    };

    @Delete('deletefromsupertokens/')
    @ApiQuery({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully removed.',
        type: SignUpDto,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async removeSupertokens(@Body() ids: SupertokensIDs): Promise<boolean> {
        return await this.clientService.removeSupertokens(ids);
    };

    @Get('auth')
    @Render('user-auth')
    auth(): any{
        return;
    }

    @Get('account')
    @Render('account')
    @UseGuards(AuthGuard)
    account(@Session() session: SessionContainer): any{
        // const userData = session.getSessionData();
        // console.log('1')
        // console.log(session.getAccessTokenPayload())
        return { };
    }
}
