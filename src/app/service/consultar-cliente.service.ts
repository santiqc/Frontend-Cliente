import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDTO } from '../interfaces/requestDto';
import { ResponseDTO } from '../interfaces/responseDto';

@Injectable({
  providedIn: 'root'
})
export class ConsultarClienteService {

  urlBase: string = 'http://localhost:8090/api/v1'

  constructor(private httpClient: HttpClient) { }

  consultarCliente(request: RequestDTO): Observable<ResponseDTO> {
    return this.httpClient.post<ResponseDTO>(this.urlBase + "/cliente", request);
  }
}
