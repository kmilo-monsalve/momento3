import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Typeusers } from 'src/app/modelo/TypeUser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  typeuser :Typeusers=  new Typeusers();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();

  }

  
    Editar(){
      let id=localStorage.getItem("id"); //el tvid viene del archivo listar.component.ts

      //actualizar sus datos
      this.service.getTypeUserId(+id)
      .subscribe(data=>{
        this.typeuser=data;
      })
    }

    //Metodo para actualizar(guardar) los cambios
    Actualizar(typeuser:Typeusers){
      this.service.updateTypeusers(typeuser)
      .subscribe(data=>{
        this.typeuser=data;
        alert("Tipo de usuario  Actualizado");
        this.router.navigate(["listar"]);
      })
    }
}

