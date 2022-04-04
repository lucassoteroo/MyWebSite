import {Component, OnInit} from '@angular/core'
import {Formacao} from './formacao'
import {FormacaoService} from './formacao.service'

@Component ({
    selector: 'app-formacao',
    templateUrl: './formacao.component.html'
})

export class FormacaoComponent implements OnInit {
    formacao: Formacao[] = []
    constructor(private formacaoService: FormacaoService) {

    }
    ngOnInit(): void {
        this.formacao = this.formacaoService.retrieveAll()
    }
}