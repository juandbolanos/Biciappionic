import { Injectable } from '@angular/core';

@Injectable()
export class EstacionesData {

  data: Estacion[]

  constructor() {
    this.loadData()
  }
  loadData() {
    this.data = [
      { nombre: 'Banco de la republica', disponibles: 2, imagen: 'http://caucaextremo.com/site/wp-content/uploads/2017/02/Sistema-Bicipp.jpeg' },
      { nombre: 'Parque informatico', disponibles: 5, imagen: 'http://popayan.gov.co/sites/default/files/images/fundacion-emtel-006.jpg' }
    ];
  }
}

export class Estacion {

  nombre: string;
  disponibles: number;
  imagen: string;

}

