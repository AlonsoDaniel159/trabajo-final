import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposito } from '../interfaces/deposito';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  private url: string = "http://localhost:9898/depositos";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Deposito[]> {
    return this.http.get<Deposito[]>(this.url);
  }

  create(deposito: Deposito): Observable<Deposito> {
    return this.http.post<Deposito>(this.url, deposito);
  }

  getById(id: number): Observable<Deposito> {
    return this.http.get<Deposito>(`${this.url}/${id}`);
  }

  update(deposito: Deposito): Observable<Deposito> {
    return this.http.put<Deposito>(this.url, deposito);
  }

  delete(id: number): Observable<Deposito> {
    return this.http.delete<Deposito>(`${this.url}/${id}`);
  }
}
