import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDTO } from '../interfaces/requestDto';
import { ResponseDTO } from '../interfaces/responseDto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultarClienteService {

  private URL_API = environment.urlBaseClient;

  constructor(private httpClient: HttpClient) { }

  consultarCliente(request: RequestDTO): Observable<ResponseDTO> {
    return this.httpClient.post<ResponseDTO>(this.URL_API + "/cliente", request);
  }
}
