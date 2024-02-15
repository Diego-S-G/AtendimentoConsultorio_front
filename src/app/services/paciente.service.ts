import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaciente } from '../interfaces/IPaciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url: string = 'https://localhost:7197/api/Paciente';

  constructor(private http: HttpClient) { }

  get(): Observable<IPaciente> {
    return this.http.get<IPaciente>(this.url);
  }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }

  delete(id: number) {
    return this.http.delete(this.url + `/${id}`)
  }

  put(entity: IPaciente ) {
    return this.http.put(this.url, entity);
  }
}
