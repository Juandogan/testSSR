import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './componentes/adm/adm.component';
import { CardComponent } from './componentes/card/card.component';
import { PrincipalComponent } from './componentes/principal/principal.component';



const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'adm', component: AdmComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
