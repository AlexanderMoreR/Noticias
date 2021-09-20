import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controller';

@Module({
  controllers: [NoticiasController]
})
export class NoticiasModule {}
