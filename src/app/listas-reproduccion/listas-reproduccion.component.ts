import {ListaReproduccion} from './../lista-reproduccion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-reproduccion',
  templateUrl: './listas-reproduccion.component.html',
  styleUrls: ['./listas-reproduccion.component.css']
})
export class ListasReproduccionComponent implements OnInit {

  listasReproduccion:ListaReproduccion[];

  constructor (){}
  ngOnInit(): void{
    this.listasReproduccion=[{
      "nombre":"Lista de reproduccion 7",
      "descripcion":"Lista de reproduccion numero 7 Spotify"
    },
    {
      "nombre":"Lista de reproduccion 8",
      "descripcion":"Lista de reproduccion numero 8 Spotify"
    }, 
  ];
  }

}
