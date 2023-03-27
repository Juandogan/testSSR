import { Component, Inject } from '@angular/core';
import { Data } from 'src/app/modelos/data';
import { CrudService } from 'src/app/servicios/crud.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  title = 'my-editor-app';
  data:any
  titulo=""
  subtitulo=""
  categoria=""
  articulo=""

  constructor(private crudService:CrudService, @Inject(PLATFORM_ID) private _platformId: Object ){
    this.data = new Data }


  ngAfterViewInit() {
    if (isPlatformBrowser(this._platformId)) {}
  }

  ngOnInit(){
    if (isPlatformBrowser(this._platformId)) {}
  }

  submitForm(){
    this.crudService.data.categoria = this.categoria
    this.crudService.data.titulo = this.titulo
    this.crudService.data.subtitulo = this.subtitulo
    this.crudService.data.articulo = this.articulo
    this.crudService.addData(this.crudService.data).subscribe(res => {console.log(res)}
  )}

}
