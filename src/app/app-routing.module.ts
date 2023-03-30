import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './componentes/adm/adm.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ResolveNotaService } from './servicios/resolve-nota.service';



const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'adm', component: AdmComponent},
  { path: 'articulo/:_id',  component:  ArticuloComponent,  resolve: {data: ResolveNotaService}},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled",
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
