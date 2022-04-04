import {Formacao} from './formacao'
import {Injectable} from '@angular/core'

@Injectable ({
    providedIn: 'root'
})

export class FormacaoService {
    retrieveAll(): Formacao[] {
        return formacoes;
    }
}

var formacoes: Formacao[] = [
    {
        titulo: 'Ciência da Computação',
        escola: 'Universidade Paulista',
        duracao: '2022 - 2024'
    },
    {
        titulo: 'Desenvolvimento Front-End do Zero ao Pro',
        escola: 'EBAC',
        duracao: '2021 - 2021'
    },
    {
        titulo: 'Javascript ES6 Essencial',
        escola: 'Digital Innovation One',
        duracao: '2021 - 2021'
    },
    {
        titulo: 'Programação para a internet com Javascript',
        escola: 'Digital Innovation One',
        duracao: '2021 - 2021'
    },
    {
        titulo: 'Construindo páginas para internet com Bootstrap',
        escola: 'Digital Innovation One',
        duracao: '2021 - 2021'
    },
    {
        titulo: 'Introdução ao Angular 8',
        escola: 'Digital Innovation One',
        duracao: '2022 - 2022'
    }
]