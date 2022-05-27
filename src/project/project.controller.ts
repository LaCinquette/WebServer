import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/admin.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectRO } from './project.RO';
import { ProjectService } from './project.service';

@ApiTags('project')
@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService) {};

    @Get('get/:id')
    @ApiParam({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Project with this ID',
        type: ProjectRO,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async showProject(@Param('id') id: number): Promise<ProjectRO> {
        return this.projectService.showProject(id);
    };

    @Post('post')
    @ApiBody({ type: CreateProjectDto })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Project has been successfully created.',
        type: CreateProjectDto,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async createProject(@Body() createProjectDto: CreateProjectDto): Promise<CreateProjectDto> {
        return this.projectService.createProject(createProjectDto);
    };

    @Delete('delete')
    @ApiQuery({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Project has been successfully removed.',
        type: CreateProjectDto,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async removeProject(@Query('id') id: number): Promise<CreateProjectDto> {
        return this.projectService.removeProject(id);
    };
}
