import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public mensajeExito(text: string): void {
    Swal.fire({
      title: "Informacion",
      text: text,
      icon: "success",
      confirmButtonColor: "#62e462",
    });
  }

  public mensajeError(text: string): void {
    Swal.fire({
      title: "Error",
      text: text,
      icon: "error",
      confirmButtonColor: "#d33",
    });
  }

}
