import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";


export class createBusqueda {

    @IsString()
    name: string;
}