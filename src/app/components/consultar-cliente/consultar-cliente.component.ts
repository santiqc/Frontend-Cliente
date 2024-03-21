import { Component, OnInit } from '@angular/core';
import { ConsultarClienteService } from '../../service/consultar-cliente.service';
import { RequestDTO } from '../../interfaces/requestDto';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { AlertService } from '../../utils/alertService';
import { ClienteDTO, ResponseDTO } from '../../interfaces/responseDto';
@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.css'
})
export class ConsultarClienteComponent implements OnInit {
  tiposDocumento: any[] = [
    { value: 'C', viewValue: 'Cédula de Ciudadanía' },
    { value: 'P', viewValue: 'Pasaporte' },
  ];

  form: FormGroup;
  clienteConsultado: ClienteDTO | null = null;
  constructor(
    private clienteService: ConsultarClienteService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({

      numDocumento: ['', [Validators.required, Validators.maxLength(250)]],
      tipoDocumento: ['', [Validators.required]]
    });


  }

  ngOnInit(): void {
  }

  consultarCliente() {
    this.alertService.loading("Cargando...")

    const valoresFormulario = this.form.getRawValue();
    const data: RequestDTO = {
      tipoDocumento: valoresFormulario.tipoDocumento,
      numeroDocumento: valoresFormulario.numDocumento
    }

    this.clienteService.consultarCliente(data).subscribe({
      next: (value: ResponseDTO) => {
        this.clienteConsultado = value.data;
        this.alertService.mensajeExito(value.mensaje);
      },
      error: (err) => {
        this.clienteConsultado = null;
        this.alertService.mensajeError(err.error.mensaje);

      }, complete: () => {
        this.alertService.close();
      },
    })
  }

}
