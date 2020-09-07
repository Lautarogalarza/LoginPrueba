import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Usuario } from "../../classes/usuario";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private authService:AuthService,public router:Router) { }
  
  ngOnInit() {
    
  }
  
  usuario = new Usuario()
  error:string;
  usuarios=["User@User.com","Usuario@Usuario.com","NuevoUser@NuevoUser.com","Test@Test.com","Admin@Admin.com"];
  passwords:string="123456";
   
  cambio(value){
    this.usuario.email = value.target.value;
    this.usuario.password = this.passwords;
  }
  
  OnSubmitLogin(){
    
    if ((this.usuario.email=='' || this.usuario.password=='') || (this.usuario.email==null || this.usuario.password==null)) {
      
      this.error = "Usuario o contraseña vacio"
    }
    else{
      this.error = null
      
      this.authService.login(this.usuario.email,this.usuario.password).then(response =>{
        this.router.navigate(['/blank'])
        this.usuario.email = null;
        this.usuario.password = null;
        let select = <HTMLInputElement>document.getElementById("miselect");
        select.value = "Seleccione un usuario";
      }).catch(error => this.error = "El usuario no existe");
      
    }

  }
  
}


