import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { usuario } from '../../providers/usuarios-data'

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {

  usuario: usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams) { this.usuario= new usuario }

 
}
