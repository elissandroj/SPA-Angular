import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  alunos = [] as Pessoa[]
  professores = [] as Pessoa[]

  lista = [] as Pessoa[];
  listar = false;

  constructor() { }

  ngOnInit(): void {
  }

  addItemAlunos(newItem: Pessoa) {
    this.alunos.push(newItem);
  }

  addItemProfessores(newItem: Pessoa) {
    this.professores.push(newItem);
  }

  listAlunos(confirm: boolean){
    this.listar = confirm;
    this.lista = this.alunos
  }

  listProfessores(confirm: boolean){
    this.listar = confirm;
    this.lista = this.professores
  }
}
