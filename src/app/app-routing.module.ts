import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { AgregarVehiculoComponent } from './agregar-vehiculo/agregar-vehiculo.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaVehiculosComponent },
  { path: 'editar/:id', component: EditarVehiculoComponent },
  { path: 'agregar', component: AgregarVehiculoComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
