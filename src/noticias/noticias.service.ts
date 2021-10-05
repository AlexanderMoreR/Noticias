import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticias } from './entities/noticias.entity';
import { createNoticia, editNoticia } from './dtos'

@Injectable()
export class NoticiasService {

    constructor(
        @InjectRepository(Noticias)
        private readonly noticiaRepository: Repository<Noticias>
    ) {}

    async getNoticias(): Promise<Noticias[]>{
        return await this.noticiaRepository.find();
    }

    async getNoticia(id: string){
        const noticia = await this.noticiaRepository.findOne(id);
        if (!noticia) throw new NotFoundException();
        return noticia;
    }

    async createNoticia (dto: createNoticia){
        const noticia = this.noticiaRepository.create(dto as any);
        return await this.noticiaRepository.save(noticia);
    }

    async editNoticia(id: number, dto: editNoticia){
        const noticia = await this.noticiaRepository.findOne(id);
        if (!noticia) throw new NotFoundException('Noticia no existe!');

        const editedNoticia = Object.assign(noticia, dto);
        return await this.noticiaRepository.save(editedNoticia);
    }

    async deleteNoticia(id: number){
        return await this.noticiaRepository.delete(id);
    }

}
