import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './index/header/nav/nav.component';
import { ApresentacaoComponent } from './index/header/apresentacao/apresentacao.component';
import { DadosComponent } from './index/main/dados/dados.component';
import { ResumoComponent } from './index/main/resumo/resumo.component';
import { FormacaoComponent } from './index/main/formacao/formacao.component';
import { ProjetosComponent } from './index/main/projetos/projetos.component';
import { ConhecimentosComponent } from './index/main/conhecimentos/conhecimentos.component';
import { ContatosComponent } from './index/main/contatos/contatos.component';
import { RodapeComponent } from './index/footer/rodape.component';

@NgModule({

  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    ApresentacaoComponent,
    DadosComponent,
    ResumoComponent,
    FormacaoComponent,
    ProjetosComponent,
    ConhecimentosComponent,
    ContatosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'index', component: IndexComponent 
      }, {
        path: '', component: IndexComponent, pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
