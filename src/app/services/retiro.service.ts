import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retiro } from '../interfaces/retiro';

@Injectable({
  providedIn: 'root'
})
export class RetiroService {

  private url: string = "http://localhost:9898/retiros";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Retiro[]> {
    return this.http.get<Retiro[]>(this.url);
  }

  create(deposito: Retiro): Observable<Retiro> {
    return this.http.post<Retiro>(this.url, deposito);
  }

  getById(id: number): Observable<Retiro> {
    return this.http.get<Retiro>(`${this.url}/${id}`);
  }

  update(deposito: Retiro): Observable<Retiro> {
    return this.http.put<Retiro>(this.url, deposito);
  }

  delete(id: number): Observable<Retiro> {
    return this.http.delete<Retiro>(`${this.url}/${id}`);
  }
}
