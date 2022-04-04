import {Component, OnInit} from '@angular/core'
import {Projetos} from './projetos'
import {ProjetosService} from './projetos.service'

@Component ({
    selector: 'app-projetos',
    templateUrl: './projetos.component.html'
})


export class ProjetosComponent implements OnInit {
    projetos: Projetos[] = []
    constructor(private projetosService: ProjetosService) {

    }
    ngOnInit(): void {
        this.projetos = this.projetosService.retriveAll()
    }
}