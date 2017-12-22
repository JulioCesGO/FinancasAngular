import { Conta } from '../../model/conta.to';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContaService {

  constructor() { }

  _salvar( conta : Conta ){

  }

  _listar() : Observable<Conta[]>{
    return new Observable<Conta[]>();
  }

  _remover( idconta : number ){
    
  }
}
