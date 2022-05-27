import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectRO } from './project.RO';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {}
    
    async showProject(projectId: number): Promise<ProjectRO> {
        return await this.prisma.project.findUnique({
            where: {
                projectId
            }
        });
    };

    async createProject(createProjectDto: CreateProjectDto): Promise<CreateProjectDto> {
        return await this.prisma.project.create({
            data: createProjectDto
        });
    };

    async removeProject(projectId: number): Promise<CreateProjectDto> {
        return await this.prisma.project.delete({
            where: {
                projectId
            }
        });
    };
}
