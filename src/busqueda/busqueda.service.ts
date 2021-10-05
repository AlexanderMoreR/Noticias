import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createBusqueda } from './dtos/createBusqueda.dtos';
import { Busqueda } from './entities/busqueda.entity'

@Injectable()
export class BusquedaService {

    constructor(
        @InjectRepository(Busqueda)
        private readonly noticiaRepository: Repository<Busqueda>
    ) {}

    async getBusquedas(): Promise<Busqueda[]>{
        return await this.noticiaRepository.find();
    }

    async getBusqueda(id: string){
        const busqueda = await this.noticiaRepository.findOne(id);
        if (!busqueda) throw new NotFoundException();
        return busqueda;
    }

    async createBusqueda (dto: createBusqueda){
        const busqueda = this.noticiaRepository.create(dto as any);
        return await this.noticiaRepository.save(busqueda);
    }

}
