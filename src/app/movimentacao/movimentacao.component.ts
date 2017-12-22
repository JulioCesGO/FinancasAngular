import { Conta } from '../../model/conta.to';
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Movimentacao } from '../../model/movimentacao.to';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  _movimentacoes : Movimentacao[] = [];
  
  model : Movimentacao;
  @Input() _contaSelecionada : Conta ;
  @Output()
  contaSelecionadaEvent = new EventEmitter<Conta>();

  constructor() { 
    this.model = new Movimentacao();
    console.log('construtor');
  }

  adicionar(){
    if (this._movimentacoes == null){
      this._movimentacoes = [];
    }
    this._movimentacoes.push(this.model);
  }

  resetar(){

  }

  voltar(){
    this.contaSelecionadaEvent.emit(null);
  }
  ngOnInit() {
  }

}
