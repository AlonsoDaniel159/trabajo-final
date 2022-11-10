import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Deposito } from 'src/app/interfaces/deposito';
import { ClienteService } from 'src/app/services/cliente.service';
import { DepositoService } from 'src/app/services/deposito.service';

@Component({
  selector: 'app-form-depositos',
  templateUrl: './form-depositos.component.html',
  styleUrls: ['./form-depositos.component.css']
})
export class FormDepositosComponent implements OnInit {

  
  deposito: Deposito = {
    cod_dep: 0,
    fecha: new Date(),
    monto: 0,
    cliente: 0
  }

  clientes: Cliente[] = [];

  titulo: string = 'NUEVO DEPÓSITO'
  boton: string = 'Agregar'

  constructor(private service: DepositoService,
            private serviceCli: ClienteService,
            private router: Router,
            private routerActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActivate.params.subscribe({
      next: param => {
        if(param['id']>0) {
          this.boton = 'Actualizar';
          this.titulo = 'ACTUALIZAR DEPÓSITO';

          this.service.getById(param['id']).subscribe({
            next: data => {
              this.deposito = data;
            }
          })
        }
      }
    });
    
    this.serviceCli.getAll().subscribe({
      next: data => {
        this.clientes = data;
        console.log(this.clientes);
        
      }
    })
  }

  agregar() {
    if(this.deposito.cod_dep!>0) {
      this.service.update(this.deposito).subscribe({
        next: data => {
          this.router.navigate(['/depositos'])
        }
      })
    }else {
      this.service.create(this.deposito).subscribe({
        next: data => {
          this.router.navigate(['/depositos'])
        }
      })
    }
  }


}
