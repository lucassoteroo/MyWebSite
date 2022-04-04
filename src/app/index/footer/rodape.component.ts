import {Component, OnInit} from '@angular/core'
import {Rodape} from './rodape'

@Component ({
    selector: 'app-rodape',
    templateUrl: './rodape.component.html'
})

export class RodapeComponent implements OnInit {
    rodape: Rodape[] = []
    ngOnInit(): void {
        this.rodape = [
            {
                imageUrl: '/assets/images/social/whatsapp.svg',
                url: 'https://api.whatsapp.com/send?phone=5592993800146&text=Whatsapp'
            },
            {
                imageUrl: '/assets/images/social/instagram.svg',
                url: 'https://www.instagram.com/luucassotero/'
            },
            {
                imageUrl: '/assets/images/social/facebook.svg',
                url: 'https://www.facebook.com/lucas.abreu.792'
            }
        ]
    }
}