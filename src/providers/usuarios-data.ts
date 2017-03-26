import { Injectable } from '@angular/core';


@Injectable()
export class UsuariosData {

  constructor() {
    
  }

}
export class usuario{
  user:string;
  nombre:string;
  password:string;
  confpassword:string;
  email:string;
}
