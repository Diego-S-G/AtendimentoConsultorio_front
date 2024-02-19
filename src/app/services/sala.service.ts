import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISala } from '../interfaces/ISala';


@Injectable({
  providedIn: 'root'
})
export class SalaService {
  url: string = 'https://localhost:7197/api/Sala';

  constructor(private http: HttpClient) { }

  get(): Observable<ISala> {
    return this.http.get<ISala>(this.url);
  }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  put(entity: ISala ) {
    return this.http.put(this.url, entity);
  }
}
