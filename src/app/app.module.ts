import { Conta } from '../model/conta.to';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { ContaService } from './conta/conta.service';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';


@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    MovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
