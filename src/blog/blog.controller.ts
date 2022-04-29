import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BlogRO } from './blog.RO';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {};

    @Get('get/:id')
    @ApiParam({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Search results',
        type: BlogRO,
    })
    async findAll(@Param('id') id: number): Promise<BlogRO>{
        return await this.blogService.showPost(id);
    };

    @Post('post')
    @ApiBody({ type: CreateBlogDto })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully created.',
        type: CreateBlogDto,
    })
    async create(@Body() createClientDto: CreateBlogDto): Promise<CreateBlogDto> {
        return await this.blogService.postBlog(createClientDto);
    };

    @Delete('delete')
    @ApiQuery({
        name: "id",
        type: Number
    })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully removed.',
        type: CreateBlogDto,
    })
    async remove(@Query('id') id: number): Promise<CreateBlogDto> {
        return await this.blogService.removePost(id);
    };
}
