import {Component, OnInit} from '@angular/core'
import {Resumo} from './resumo'

@Component ({
    selector: 'app-resumo',
    templateUrl: './resumo.component.html'
})

export class ResumoComponent implements OnInit {
    resumo: Resumo[] = []
    ngOnInit(): void {
        this.resumo = [
            {
                imageUrl: '/assets/images/fotoPerfil.jpeg',
                resumo: 'Me chamo Lucas Sotero Rodrigues Abreu, nasci em 2001 e me interesso por tecnologia desde que me entendo por gente, porém acho que tudo começou com os games. Aos 18 anos passei para engenharia no Universidade Federal do Amazonas, só que o curso não era o que eu almejava, então aos 19, depois de 2 períodos, tranquei a faculdade e resolvi ir atrás das minhas ambições. Hoje estudo na Universidade Paulista, me formo em 2024 e estou fazendo o que sempre almejei, trabalhar com programação'
            }
        ]
    }
}