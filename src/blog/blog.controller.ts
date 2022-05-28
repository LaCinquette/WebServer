import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Render, UseGuards, UsePipes } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiCreatedResponse, ApiNotImplementedResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { skip } from 'rxjs';
import { AdminGuard } from 'src/auth/admin.guard';
import { JoiValidationPipe } from 'src/joi-validation.pipe';
import { BlogRO } from './blog.RO';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {};

    @Get('')
    @Render('blog')
    blog(): void {
        //
    }

    @Get('get')
    @Render('blog')
    async blogShow(@Query('skip') skip?: number, @Query('take') take?: number): Promise<BlogRO[]>{
        // if (skip === NaN || take === NaN){
        //     throw new BadRequestException();
        // }
        return await this.blogService.showPosts(skip ? skip : 0, take ? take : 5);
    }

    @Get('searchbyid/:id')
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
        return await this.blogService.showPostById(id);
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
    async create(@Body() createBlogDto: CreateBlogDto): Promise<CreateBlogDto> {
        console.log(createBlogDto)
        return await this.blogService.postToBlog(createBlogDto);
    };

    // @Post('post-test')
    // postTest(@Body() createClientDto: CreateBlogDto){
    //     console.log(createClientDto)
    // }

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
