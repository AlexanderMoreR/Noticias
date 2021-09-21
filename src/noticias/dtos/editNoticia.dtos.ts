import { createNoticia } from "./createNoticia.dtos";
import { PartialType } from '@nestjs/mapped-types';

export class editNoticia extends PartialType(createNoticia) {

}