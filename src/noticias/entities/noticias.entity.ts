import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('noticias')
export class Noticias{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255 })
    description?: string;

    @Column({ type: 'varchar', length: 255 })
    file?: string;

    @Column({ type: 'varchar', length: 255 })
    category! : string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}