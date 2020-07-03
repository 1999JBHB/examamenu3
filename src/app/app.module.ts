import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AddTareaComponent } from './componentes/add-tarea/add-tarea.component';
import { NotaComponent } from './componentes/nota/nota.component';
import { AddNotaComponent } from './componentes/add-nota/add-nota.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent,
    AddTareaComponent,
    NotaComponent,
    AddNotaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
