import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Typeusers } from '../modelo/TypeUser';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/backfacturacion/User';
  


    getTypeUsers(){
      return this.http.get<Typeusers[]>(this.url);
    }

    // Metodo para guardar registros. 
    createTypeUsers(typeusers:Typeusers){
      return this.http.post<Typeusers>(this.url,typeusers);
    }

      // Este metodo toma el id que se requiere actualizar
    getTypeUserId(id:number){
      return this.http.get<Typeusers>(this.url+"/"+id);
    }

      // estes es el metodo para actualizar
    updateTypeusers(typeusers:Typeusers){
      return this.http.put<Typeusers>(this.url+"/" +typeusers.user.id,typeusers);
    }

    deleteTipovehiculo(typeusers:Typeusers){
      return this.http.delete<Typeusers>(this.url+"/"+ typeusers.user.id);
    }
}
