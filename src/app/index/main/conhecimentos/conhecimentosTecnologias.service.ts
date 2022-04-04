import {ConhecimentosTecnologias} from './conhecimentos'
import {Injectable} from '@angular/core'

@Injectable ({
    providedIn: 'root'
})

export class ConhecimentosTecnologiasService {
    retriveAll(): ConhecimentosTecnologias[] {
        return conhecimentosTecnologias
    }
}

var conhecimentosTecnologias: ConhecimentosTecnologias[] = [
    {
        imageUrl: '/assets/images/tecnologias/html5.svg',
        nome: 'Html 5'
    },
    {
        imageUrl: '/assets/images/tecnologias/css3.svg',
        nome: 'Css 3'
    }, 
    {
        imageUrl: '/assets/images/tecnologias/bootstrap.svg',
        nome: 'Bootstrap'
    },
    {
        imageUrl: '/assets/images/tecnologias/sass.svg',
        nome: 'Sass'
    },
    {
        imageUrl: '/assets/images/tecnologias/less.svg',
        nome: 'Less'
    },
    {
        imageUrl: '/assets/images/tecnologias/javascript.svg',
        nome: 'Javascript'
    },
    {
        imageUrl: '/assets/images/tecnologias/jquery.svg',
        nome: 'Jquery'
    },
    {
        imageUrl: '/assets/images/tecnologias/angular.svg',
        nome: 'Angular'
    },
    {
        imageUrl: '/assets/images/tecnologias/gulp.svg',
        nome: 'Gulp'
    },
    {
        imageUrl: '/assets/images/tecnologias/docker.svg',
        nome: 'Docker'
    }
]