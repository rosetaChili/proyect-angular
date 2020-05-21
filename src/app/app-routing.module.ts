import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentePruebasComponent } from './componente-pruebas/componente-pruebas.component'


const routes: Routes = [
  { path: 'componente-pruebas', component: ComponentePruebasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
