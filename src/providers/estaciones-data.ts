import { Injectable } from '@angular/core';

@Injectable()
export class EstacionesData {

  data: Estacion[]

  constructor() {
    this.loadData()
  }
  loadData() {
    this.data = [
      { nombre: 'Banco de la republica', disponibles: 2, imagen: 'http://clcdn02.mundotkm.com/2016/02/HELADO5.jpg' },
      { nombre: 'Banco de la republica', disponibles: 2, imagen: 'http://clcdn02.mundotkm.com/2016/02/HELADO5.jpg' }
    ];
  }
}

export class Estacion {

  nombre: string;
  disponibles: number;
  imagen: string;

}

