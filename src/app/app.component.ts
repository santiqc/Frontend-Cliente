
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConsultarClienteComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-cliente';
}
