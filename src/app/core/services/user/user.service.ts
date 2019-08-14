import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs'

var persona = [
  { codigo: '0001', nombre: 'Neyser' ,apellido:'Marquina', edad:25},
  { codigo: '0002', nombre: 'Juan' ,apellido:'Pelalez', edad:28},
  { codigo: '0003', nombre: 'Pedro' ,apellido:'Guzman', edad:23},
  { codigo: '0004', nombre: 'Luis' ,apellido:'Acuña', edad:35},
];
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  public getPersona() {
    return new Promise(resolve => {
      let data;
        data = persona;
      resolve(data);
    });
  }
  public editPersona(codigo,nombre,apellido,edad) {
    return new Promise(resolve => {

      persona.map(function(dato){
        if(dato.codigo == codigo){
          dato.nombre = nombre;
          dato.apellido = apellido;
          dato.edad = edad;
        }
        
        return dato;
      });
      resolve(codigo);
    });
  }
}

