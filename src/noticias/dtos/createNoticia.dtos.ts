import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";
import { noticiasCategory } from "../enums/noticiasCategory.enum";
import { EnumToString } from "src/common/helpers/enumToString";


export class createNoticia {

    @IsString()
    name: string;

    @IsString()
    description?: string;

    foto: File;

    @IsEnum(noticiasCategory, {
        message: `Opcion invalida. Las Opciones correctas son: ${ EnumToString(noticiasCategory)}`
    })
    category: noticiasCategory;

}