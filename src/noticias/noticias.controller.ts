import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { query } from 'express';
import { createNoticia } from './dtos/createNoticia.dtos';
import { editNoticia } from './dtos/editNoticia.dtos';
import { NoticiasService } from './noticias.service';

@Controller('noticias')
export class NoticiasController {

    constructor(private readonly noticiasService: NoticiasService ){}

    @Get()
    async getNoticias() {
        const data = await this.noticiasService.getNoticias();
        return { data };
    }

    @Get(':id')
    async getNoticia(
        @Param('id') id: string
    ) {
        const data = await this.noticiasService.getNoticia(id);
        return { data };
    }

    @Post()
    async createNoticia(
        @Body() dto: createNoticia
    ) {
        const data = await this.noticiasService.createNoticia(dto);
        return { message: 'Noticia Creada', data };
    }

    @Put(':id')
    async editNoticia( @Param('id') id: number, @Body() dto: editNoticia
    ) {
        const data = await this.noticiasService.editNoticia(id, dto);
        return{ message: 'Noticia editada', data };
    }

    @Delete(':id')
    async deleteNoticia(@Param('id') id: number) {
        const data = await this.deleteNoticia(id);
        return{ message: 'Noticia eliminada', data };
    }
}
