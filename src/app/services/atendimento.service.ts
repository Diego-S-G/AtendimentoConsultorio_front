import { Injectable } from '@angular/core';
import { IAtendimento } from '../interfaces/IAtendimento';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  url: string = 'https://localhost:7197/api/Atendimento';

  constructor(private http: HttpClient) { }

  get(): Observable<IAtendimento> {
    return this.http.get<IAtendimento>(this.url);
  }

  getFinalizados(take: number): Observable<IAtendimento> {
    return this.http.get<IAtendimento>(`${this.url}/${take}`)
  }

  getEmAndamento(): Observable<IAtendimento> {
    return this.http.get<IAtendimento>(`${this.url}/Andamento`);
  }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  put(entity: IAtendimento ) {
    return this.http.put(this.url, entity);
  }
}
