import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  cliente: Cliente = {
    n_cuenta: 0,
    apellido: '',
    dni: 0,
    nombre: ''
  }
  titulo: string = 'AGREGAR NUEVO CLIENTE'
  boton: string = 'Agregar'

  constructor(private service: ClienteService,
            private router: Router,
            private routerActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActivate.params.subscribe({
      next: param => {
        if(param['id']>0) {
          this.boton = 'Actualizar';
          this.titulo = 'ACTUALIZAR CLIENTE';

          this.service.getById(param['id']).subscribe({
            next: data => {
              this.cliente = data;
            }
          })
        }
      }
    })
  }

  agregar() {
    if(this.cliente.n_cuenta!>0) {
      this.service.update(this.cliente).subscribe({
        next: data => {
          this.router.navigate(['/clientes'])
        }
      })
    }else {
      this.service.create(this.cliente).subscribe({
        next: data => {
          this.router.navigate(['/clientes'])
        }
      })
    }
  }

}
