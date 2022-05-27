/* eslint-disable no-var */
import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException, NotImplementedException, UseFilters } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ClientRO } from './client.RO';
import { SignInDto, SignUpDto, SupertokensIDs } from './dto/create-client.dto';
import { NoClientsFoundFilter } from './no-clients-found.filter';
import { NoClientsFoundException } from './noclientsfound.exception';
import {deleteUser} from "supertokens-node";

export class UserAlreadyExistsException extends HttpException {
    constructor() {
      super('User already exists!', HttpStatus.CONFLICT);
    }
  }
  

@Injectable()
export class ClientService {
    constructor(private prisma: PrismaService) {}
    
    async findAll(name: string): Promise<ClientRO[]> {
        const res = await this.prisma.client.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            select: {
                name: true,
                company: true
            }
        });

        if (res.length == 0){
            throw new NoClientsFoundException(name);
        }

        return res;
    }

    async create(createClientDto: SignUpDto): Promise<SignUpDto> {
        return await this.prisma.client.create({
            data: createClientDto
        });
    }

    async remove(id: number): Promise<SignUpDto> {
        // return await this.prisma.client.delete({
        //     where: {
        //         id
        //     }
        // });
        return;
    }

    async removeSupertokens(ids: SupertokensIDs): Promise<boolean> {
        
        for(var id in ids.ids){
            if (!(await deleteUser(id))){
                return false;
            }

            this.prisma.client.delete({
                where: {
                    clientId: id
                }
            })
        }

        return true;
    }
}
