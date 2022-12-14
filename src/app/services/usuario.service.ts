import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = "http://localhost:9898/rest_usu";

  constructor(private http: HttpClient) { }

  // LISTAR PERSONAS
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }


}
