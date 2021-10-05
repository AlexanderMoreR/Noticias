import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createBusqueda } from './dtos/createBusqueda.dtos'
import { BusquedaService } from './busqueda.service'

@Controller('busquedas')
export class BusquedaController {

    constructor(private readonly busquedaService: BusquedaService ){}

    @Get()
    async getBusquedas() {
        const data = await this.busquedaService.getBusquedas();
        return { data };
    }

    @Get(':id')
    async getBusqueda(
        @Param('id') id: string
    ) {
        const data = await this.busquedaService.getBusqueda(id);;
        return { data };
    }

    @Post()
    async createBusqueda(
        @Body() dto: createBusqueda
    ) { 
        console.log('Entra?')
        const data = await this.busquedaService.createBusqueda(dto);
        
        return { message: 'Busqueda Creada', data };
    }


}


