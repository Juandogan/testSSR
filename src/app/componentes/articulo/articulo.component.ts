import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  constructor(
    private ruta: ActivatedRoute,
    public crudService: CrudService,
    private location: Location,
  ) {}

  nota:any

  ngOnInit(): void {


    this.ruta.data.subscribe((data) => {

      this.nota = Object.entries(data).map((i) => i[1]);
      console.log(this.nota)

    //aqui agregar contador devistas
    });
  }
back(){
  this.location.back()
}

}
