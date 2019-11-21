import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Typeusers } from 'src/app/modelo/TypeUser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  typeuser:Typeusers = new Typeusers();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){  
    this.service.createTypeUsers(this.typeuser)
    .subscribe(data=>{
      alert("Tipo de Usuario Guardado");
      this.router.navigate(["listar"]);   //navegar hacia el componente listar que esta enrrutado en el archivo app-routing
    })
  }
}
