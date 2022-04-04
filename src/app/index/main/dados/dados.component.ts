import {Component, OnInit} from '@angular/core'
import {Dados} from './dados'

@Component ({
    selector: 'app-dados',
    templateUrl: './dados.component.html'
})

export class DadosComponent implements OnInit {
    dados: Dados[] = []
    ngOnInit(): void {
        this.dados = [
            {
                idade: '18/06/2001',
                numero: '(92) 99380-0146',
                rua: 'Rua Maracaibo',
                bairro: 'Cidade Nova'
            }
        ]
    }
}