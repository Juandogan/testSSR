import { Component } from '@angular/core';
import { Data } from 'src/app/modelos/data';
import { CrudService } from 'src/app/servicios/crud.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
 animations: [
    trigger('listAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class PrincipalComponent {
  title = 'testSSR';
  data:any
  loading = true
  constructor(private crudService:CrudService){

  }

  ngOnInit(){
  this.crudService.getDatas().subscribe(res=>{console.log(res);
  this.data = res as Data
  this.data = this.data.reverse()
  this.loading = false
    })
  }

  trackByFn(index: number, data: any) {
    return data.id;
  }
}
