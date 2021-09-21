import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createNoticia } from './dtos/createNoticia.dtos';
import { editNoticia } from './dtos/editNoticia.dtos';
import { NoticiasService } from './noticias.service';

@Controller('noticias')
export class NoticiasController {

    constructor(private readonly noticiasService: NoticiasService ){}

    @Get()
    async getNoticias() {
        const data = this.noticiasService.getNoticias();
        return { data };
        //Crear un servicio para guardar las consulta cada vez que se consume esta peticion.
    }

    @Get(':id')
    async getNoticia(
        @Param('id', ParseIntPipe) id: number
    ) {
        const data = this.noticiasService.getNoticia(id);
        return { data };
    }

    @Post()
    async createNoticia(
        @Body() dto: createNoticia
    ) {
        const data = this.noticiasService.createNoticia(dto);
        return { data };
    }

    @Put(':id')
    async editNoticia( @Param('id') id: number, @Body() dto: editNoticia
    ) {
        const data = this.noticiasService.editNoticia(id, dto);
        return{ message: 'Noticia editada', data };
    }

    @Delete(':id')
    async deleteNoticia(@Param('id') id: number) {
        const data = this.deleteNoticia(id);
        return{ message: 'Noticia eliminada', data };
    }
}
