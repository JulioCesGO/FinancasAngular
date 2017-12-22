import { Conta } from './conta.to';

export class Movimentacao{
    public id : number;
    public conta: Conta;
    public tipo: number;
    public descricao: string;
    public valor: number;
    
}