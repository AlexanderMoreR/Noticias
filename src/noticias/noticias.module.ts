import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';
import { Noticias } from './entities/noticias.entity';
import { NoticiasService } from './noticias.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Noticias])
  ],
  controllers: [NoticiasController],
  providers: [NoticiasService]
})
export class NoticiasModule {}
