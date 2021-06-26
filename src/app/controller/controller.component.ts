import { Pessoa } from './../model/pessoa';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @Input() type: string
  @Input() quantidade: number
  @Output() newItemEvent = new EventEmitter<Pessoa>();
  @Output() listEvent = new EventEmitter<boolean>();

  pessoa = {} as Pessoa

  cadastro = false;
  listar = false;

  constructor() { }

  ngOnInit(): void {
  }

  setCadastro(){
    this.cadastro = !this.cadastro
    this.pessoa.nome='';
    this.pessoa.email='';
    this.pessoa.idade=null;
    this.pessoa.curso=''
  }

  addNewItem() {
    var pessoa = {...this.pessoa}
    this.newItemEvent.emit(pessoa);
    this.setCadastro()
  }

  list(){
    this.listar = !this.listar
    this.listEvent.emit(this.listar);
  }

  ver(){
    console.log(this.pessoa)
  }
}
