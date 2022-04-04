import {Component, OnInit} from '@angular/core'
import {Contatos} from './contatos'

@Component ({
    selector: 'app-contatos',
    templateUrl: './contatos.component.html'
})

export class ContatosComponent implements OnInit {
    contatos: Contatos[] = []
    ngOnInit(): void {
        this.contatos = [
            {
                imageUrl: '/assets/images/contatos/linkedin.svg',
                texto: 'Conecte-se e fique por dentro de todas as minhas atividade e atualizações sobre minha carreira',
                url: 'https://www.linkedin.com/in/lucas-sotero-9011871b6/'
            },
            {
                imageUrl: '/assets/images/contatos/github.svg',
                texto: 'Acesse meus repositórios e veja como aplico meus projetos e a linguagens que aprendo',
                url: 'https://github.com/lucassoteroo'
            },
            {
                imageUrl: '/assets/images/contatos/gmail.svg',
                texto: 'Entre em contato direto comigo através do meu g-mail. Estou sempre de olho nele!',
                url: 'mailto:luucassotero@gmail.com'
            }          
        ]
    }
}
