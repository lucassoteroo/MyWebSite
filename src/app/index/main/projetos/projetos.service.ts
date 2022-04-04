import {Projetos} from './projetos'
import {Injectable} from '@angular/core'

@Injectable ({
    providedIn: 'root'
})

export class ProjetosService {
    retriveAll(): Projetos[] {
        return projetos;
    }
}

var projetos: Projetos[] = [
    {
        titulo: 'Devlix',
        descricao: 'Um clone da Netflix, o objetivo é ser um serviço de streaming voltado para o públic dev.',
        tecnologias: 'HTML, CSS, JQuery, Sass, Gulp'
    },
    {
        titulo: 'O Mentalista',
        descricao: 'Um jogo simples de tentativa e erro para jogar sozinho ou em multiplayer, boa sorte.',
        tecnologias: 'HTML, CSS, Javascript'
    },
    {
        titulo: 'ImersãoDev',
        descricao: 'Repósitorio com projetos referentes a ImersãoDev de 2021, realizado pela Alura.',
        tecnologias: 'HTML, CSS, Javascript'
    }
]