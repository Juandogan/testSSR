import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer  } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { CrudService } from 'src/app/servicios/crud.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {



  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private ruta: ActivatedRoute,
    public crudService: CrudService,
    private location: Location,
    public  sanitizer: DomSanitizer,

  ) {}

  nota:any


  ngAfterViewInit() {
    if (isPlatformBrowser(this._platformId)) {


    }
  }


  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {}


    this.ruta.data.subscribe((data) => {

      this.nota = Object.entries(data).map((i) => i[1]);
      this.nota[0].articulo = this.transformYourHtml(this.nota[0]?.articulo)
      console.log(this.nota)

    //aqui agregar contador devistas
    });
  }
back(){
  this.location.back()
}

transformYourHtml(htmlTextWithStyle:string) {
  return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
}

}
