import {Component, OnInit} from '@angular/core'
import {Apresentacao} from './apresentacao'

@Component ({
    selector: 'app-apresentacao',
    templateUrl: './apresentacao.component.html'
})

export class ApresentacaoComponent implements OnInit {
    apresentacao: Apresentacao[] = []
    ngOnInit(): void {
        this.apresentacao = [
            {
                imageUrl: '/assets/images/ling.svg'
            }
        ]
    }

}