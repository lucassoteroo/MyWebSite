import {ConhecimentosDesign} from './conhecimentos'
import {Injectable} from '@angular/core'

@Injectable ({
    providedIn: 'root'
})

export class ConhecimentosDesignService {
    retriveAll(): ConhecimentosDesign[] {
        return conhecimentosDesign
    }
}

var conhecimentosDesign: ConhecimentosDesign[] = [
    {
        imageUrl: '/assets/images/design/canva.svg',
        nome: 'Canva'
    },
    {
        imageUrl: '/assets/images/design/figma.svg',
        nome: 'Figma'
    }
]