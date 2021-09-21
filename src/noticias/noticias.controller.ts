import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
        //Crear un servicio para guardar las consulta cada vez que se consume esta peticion.
    }

    @Get(':id')
    async getNoticia(
        @Param('id', ParseIntPipe) id: number
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
