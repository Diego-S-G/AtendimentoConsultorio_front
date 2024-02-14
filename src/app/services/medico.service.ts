import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url: string = 'https://localhost:7197/api/Medico';

  constructor(private http: HttpClient) { }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }
}
