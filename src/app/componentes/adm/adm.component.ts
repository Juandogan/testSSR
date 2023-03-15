import { Component } from '@angular/core';
import { Data } from 'src/app/modelos/data';
import { CrudService } from 'src/app/servicios/crud.service';

declare const saveDocument: any;
declare const loadDocument: any;



@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  title = 'my-editor-app';

  onClickSave() {
    saveDocument();
  }

  onClickLoad() {
    loadDocument();
  }


data:any
titulo=""
subtitulo=""
categoria=""
articulo=""




  constructor(private crudService:CrudService ){

    this.data = new Data

  }

  ngOnInit(){

  }



submitForm(){
 this.crudService.data.categoria = this.categoria
 this.crudService.data.titulo = this.titulo
 this.crudService.data.subtitulo = this.subtitulo
 this.crudService.data.articulo = this.articulo
 this.crudService.addData(this.crudService.data).subscribe(
 res => {console.log(res)}
  )}



}
