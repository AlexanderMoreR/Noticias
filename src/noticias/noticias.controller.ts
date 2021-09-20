import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createNoticia } from './dtos/createNoticia.dtos';
import { editNoticia } from './dtos/editNoticia.dtos';

@Controller('noticias')
export class NoticiasController {

    @Get()
    async getNoticias() {
        const data = "prueba"
        return { data };
    }

    @Get(':id')
    async getNoticia(
        @Param('id', ParseIntPipe) id: number
    ) {
        const data = "prueba"
        return { data };
    }

    @Post()
    async createNoticia(
        @Body() dto: createNoticia
    ) {
        const data = "Creando noticia"
        return { data };
    }

    @Put(':id')
    async editNoticia( @Param('id') id: number, @Body() dto: editNoticia
    ) {
        const data = "creando noticia"
        return{ message: 'Notiocia editado', data };
    }

    @Delete(':id')
    async deleteNoticia(@Param('id') id: number) {
        const data = "Noticia Eliminada"
        return{ message: 'Noticia eliminada', data };
    }

}
