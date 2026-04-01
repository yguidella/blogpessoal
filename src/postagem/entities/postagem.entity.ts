/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tb_postagem' })
export class Postagem {
    
    @PrimaryGeneratedColumn() // Cria uma chave primaria e auto increment
    id!: number;

    @IsNotEmpty() // verifica se o campo está vazio
    @Column({length:100, nullable: false}) // Cria uma coluna chamada titulo, com 100 caracteres e não pode ser nulo.
    titulo!: string;

    @IsNotEmpty() // verifica se o campo está vazio
    @Column({length:1000, nullable: false})
    texto!: string;

    @UpdateDateColumn() // cria uma coluna chamada data atualização da postagem
    data!: Date;
}
