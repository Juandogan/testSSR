import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CardComponent } from './componentes/card/card.component';
import { AdmComponent } from './componentes/adm/adm.component';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { DateConverterPipe } from './pipes/date-converter.pipe';
import { FooterComponent } from './componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterLinkActive, ROUTES, RoutesRecognized } from '@angular/router';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { ResolveNotaService } from './servicios/resolve-nota.service';
import { CrudService } from './servicios/crud.service';
import { InnerComponent } from './componentes/inner/inner.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    AdmComponent,
    PrincipalComponent,
    DateConverterPipe,
    FooterComponent,
    ArticuloComponent,
    InnerComponent,
  ],

  imports: [

    CKEditorModule,
    FormsModule,
    RouterLinkActive,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    DocumentEditorModule

  ],
  providers: [ResolveNotaService, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
