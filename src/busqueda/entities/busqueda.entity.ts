import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('busquedas')
export class Busqueda{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}