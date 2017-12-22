import { Conta } from '../model/conta.to';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _contas : Conta[] = [];

  _contaSelecionada : Conta = null;
  
  title = 'app';
}
