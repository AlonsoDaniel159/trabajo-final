import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css']
})
export class Parte1Component implements OnInit {

  titulo: string = "LOGIN BASICO";
  usuariocl = null as any;

  constructor(private usuarioservice: UsuarioService, 
            private router: Router) { }


  ngOnInit(): void {

    this.usuarioservice.getAll().subscribe(
      result => this.usuariocl = result);
  }


  usu = "";
  pass = "";
  op = 0;
  resultado = "";
  // LOGIN PERSONA
  login(): void {
    for (let { usuario, password } of this.usuariocl) {
      if (this.usu == usuario && this.pass == password) {
        this.op = 1;
      }
    }
    if (this.op == 1) {
      this.router.navigate(['/clientes'])
      this.resultado = "ES CORRECTO";
    }
    else {
      this.resultado = "ES INCORRECTO";
    }
    console.log("LOGIN DEL SISTEMA");
    console.log(this.usu);
    console.log(this.pass);
    console.log(this.resultado);
  }
  cancelar(): void {
    this.usu = "";
    this.pass = "";
    this.resultado = "DEBE INGRESAR USUARIO Y PASSWORD";
  }


}
