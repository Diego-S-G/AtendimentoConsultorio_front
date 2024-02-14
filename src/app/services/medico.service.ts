import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedico } from '../interfaces/IMedico';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url: string = 'https://localhost:7197/api/Medico';

  constructor(private http: HttpClient) { }

  get():Observable<IMedico> {
    return this.http.get<IMedico>(this.url);
  }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }
}
