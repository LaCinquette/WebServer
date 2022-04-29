import { Injectable, NotImplementedException } from '@nestjs/common';
import { ClientRO } from './client.RO';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
    async findAll(name: string): Promise<ClientRO[]> {
        throw new NotImplementedException();
        // return ...
    }

    async create(createClientDto: CreateClientDto): Promise<CreateClientDto> {
        throw new NotImplementedException();
        // return ...
    }

    async remove(id: number): Promise<CreateClientDto> {
        throw new NotImplementedException();
        // return ...
    }
}
