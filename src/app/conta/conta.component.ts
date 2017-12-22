import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Conta } from '../../model/conta.to';
import { ContaService } from './conta.service';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  conta : Conta = new Conta();
  contas : Conta[] = [];

  @Output()
  contaSelecionadaEvent = new EventEmitter<Conta>();
 

  constructor(private  contaService: ContaService ) {
    this.conta = new Conta();
  }

  _adicionar(){
    if (this.contas == null){
      this.contas = [];
    }
    let indice = this.contas.length;
    let novoIndice = this.contas.push(this.conta);
    if (novoIndice>indice){
      console.log('salvo')
      this.conta = new Conta();
    }

  }

  _editar( _conta: Conta ){
    this.conta = _conta;
  }
  _selecionar( _conta: Conta){
    this.contaSelecionadaEvent.emit(_conta);
  }

  ngOnInit() {
    this.conta = new Conta();
    this.conta.id = 1;
    this.conta.titular ="asasd";
    this.contas.push(this.conta);
  }

}
