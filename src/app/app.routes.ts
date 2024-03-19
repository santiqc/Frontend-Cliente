import { Routes } from '@angular/router';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';


export const routes: Routes = [
    {path: "home", component: ConsultarClienteComponent,},
    {path: "**", component: ConsultarClienteComponent,},
  ];
