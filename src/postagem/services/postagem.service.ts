import { Injectable } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"; 


@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){}

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); // select * from tb_postagem;
    }
}