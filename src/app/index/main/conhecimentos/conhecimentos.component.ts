import {Component, OnInit} from '@angular/core'
import {ConhecimentosTecnologias, ConhecimentosDesign} from './conhecimentos'
import {ConhecimentosTecnologiasService} from './conhecimentosTecnologias.service'
import {ConhecimentosDesignService} from './conhecimentosDesign.service'

@Component ({
    selector: 'app-conhecimentos',
    templateUrl: './conhecimentos.component.html'
})

export class ConhecimentosComponent implements OnInit {
    conhecimentosTecnologias: ConhecimentosTecnologias[] = []
    conhecimentosDesign: ConhecimentosDesign[] = []
    constructor(private tecnologiasService: ConhecimentosTecnologiasService, private designService: ConhecimentosDesignService) {

    }
    ngOnInit(): void {
        this.conhecimentosTecnologias = this.tecnologiasService.retriveAll()
        this.conhecimentosDesign = this.designService.retriveAll()
    }
}