import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DevService } from './data/services/dev.service';
import { ProdService } from './data/services/prod.service';


@Module({
  imports: [
    ConfigModule.forRoot(), // 1. Adicionamos o módulo de configuração
    TypeOrmModule.forRootAsync({ // 2. Mudamos de forRoot para forRootAsync
	    useClass: ProdService, // 3. <--- AQUI selecionamos o motor de produção
      imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule, 
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController], 
  providers: [],   
})

export class AppModule {}