import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCepService {
  constructor(private http: HttpClient) {}

  find(cep: string): Observable<Cep> {
    const cepNumber = cep.replace(/\D/g, '');
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cepNumber}/json/`);
  }
}

export interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
