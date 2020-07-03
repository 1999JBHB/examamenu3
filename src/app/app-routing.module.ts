import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { NotaComponent } from './componentes/nota/nota.component';


const routes: Routes = [
  {path: 'tareas', component: TareasComponent},
  {path: 'nota', component: NotaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'tareas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
