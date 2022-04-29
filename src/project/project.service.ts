import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectRO } from './project.RO';

@Injectable()
export class ProjectService {
    async showProject(id: number): Promise<ProjectRO> {
        throw new NotImplementedException();
        // return 
    };

    async createProject(createProjectDto: CreateProjectDto): Promise<CreateProjectDto> {
        throw new NotImplementedException();
    };

    async removeProject(id: number): Promise<CreateProjectDto> {
        throw new NotImplementedException();
    };
}
