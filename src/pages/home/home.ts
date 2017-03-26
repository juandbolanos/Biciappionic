import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Estacion,EstacionesData } from '../../providers/estaciones-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  estaciones: Estacion[];

  constructor(public navCtrl: NavController, public service: EstacionesData ) {
    this.estaciones = [];
  }

  ionViewDidLoad(){
    this.estaciones =this.service.data;
  }
  
}
