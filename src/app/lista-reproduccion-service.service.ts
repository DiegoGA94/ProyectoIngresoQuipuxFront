import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ListaReproduccion } from './lista-reproduccion';

@Injectable({
  providedIn: 'root'
})
export class ListaReproduccionServiceService {

  //Esta URL obtiene el listado de las listas de reproduccion
  constructor(private httpClient : HttpClient) { }

  private baseURL = "http://localhost:8080/listaReproduccion/lists"

  obtenerListaReproduccion():Observable<ListaReproduccion[]>{
    return this.httpClient.get<ListaReproduccion[]>(`${this.baseURL}`);
  }
}
