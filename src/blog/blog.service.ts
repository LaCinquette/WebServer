import { Injectable, NotImplementedException } from '@nestjs/common';
import { BlogRO } from './blog.RO';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
    async showPost(id: number): Promise<BlogRO> {
        throw new NotImplementedException();
    }

    async postBlog(createClientDto: CreateBlogDto): Promise<CreateBlogDto> {
        throw new NotImplementedException();
    }

    async removePost(id: number): Promise<CreateBlogDto> {
        throw new NotImplementedException();
    }
}
