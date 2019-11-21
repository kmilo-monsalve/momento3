import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Typeusers } from 'src/app/modelo/TypeUser';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  typeuser:Typeusers[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getTypeUsers()
    .subscribe(
      data=>{
        this.typeuser=data;
      }
    )
  }

  Editar(typeuser:Typeusers):void{
    localStorage.setItem("idtv",typeuser.user.id.toString()); 
    this.router.navigate(['edit']); 
  }

  Delete(typeuser:Typeusers){
    this.service.deleteTipovehiculo(typeuser)
    .subscribe(data=>{
      this.typeuser=this.typeuser.filter(tv=>tv!==typeuser);
      alert("Usuario eliminado...");
    })
  }
}
