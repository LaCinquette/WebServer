import { Body, Controller, Delete, Get, Param, Post, Query, Render, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/admin.guard';
import { BlogRO } from './blog.RO';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {};

    @Get('')
    @Render('blog')
    blog(): any{
        return;
    }

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
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async findAll(@Param('id') id: number): Promise<BlogRO>{
        return await this.blogService.showPosts(id);
    };

    @Post('post')
    @ApiBody({ type: CreateBlogDto })
    @ApiNotImplementedResponse({ description: "Not implemented yet" })
    @ApiCreatedResponse({
        description: 'Client has been successfully created.',
        type: CreateBlogDto,
    })
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async create(@Body() createClientDto: CreateBlogDto): Promise<CreateBlogDto> {
        return await this.blogService.postToBlog(createClientDto);
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
    @ApiBasicAuth()
    @UseGuards(AdminGuard)
    async remove(@Query('id') id: number): Promise<CreateBlogDto> {
        return await this.blogService.removePost(id);
    };
}
