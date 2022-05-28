/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { BlogRO } from './blog.RO';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
    constructor(private prisma: PrismaService) {}
    
    async showPostById(postId: number): Promise<BlogRO> {
        return await this.prisma.blog.findUnique({
            where: {
                postId: postId
            }
        });
    }

    async showPosts(skip?: number, take?: number): Promise<BlogRO[]> {
        let res = await this.prisma.blog.findMany({
            skip,
            take
        });
        console.log(res)
        return res;
    }

    async postToBlog(data: Prisma.BlogCreateInput): Promise<CreateBlogDto> {
        console.log(data)
        return await this.prisma.blog.create({
            data
        });
    }

    // async postToBlog(createBlogDto: CreateBlogDto): Promise<CreateBlogDto> {
    //     return await this.prisma.blog.create({
    //         data: {
    //             text: createBlogDto.text
    //         }
    //     });
    // }

    async removePost(id: number): Promise<CreateBlogDto> {
        return await this.prisma.blog.delete({
            where: {
                postId: id
            }
        });
    }
}
