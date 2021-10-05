import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusquedaController } from './busqueda.controller';
import { BusquedaService } from './busqueda.service';
import { Busqueda } from './entities/busqueda.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Busqueda])
  ],
  controllers: [BusquedaController],
  providers: [BusquedaService]
})
export class BusquedaModule {}
