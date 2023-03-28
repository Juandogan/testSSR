import { Component, Input  } from '@angular/core';
import { Data } from 'src/app/modelos/data';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data:any;
  @Input() id:any;
  @Input() image:any;

  constructor(private crudService:CrudService){}

  borrar(id:any){

    this.crudService.deleteData(id).subscribe(res=>{console.log(res)})
  }
}
