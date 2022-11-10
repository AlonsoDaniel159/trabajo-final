import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { Retiro } from 'src/app/interfaces/retiro';
import { ClienteService } from 'src/app/services/cliente.service';
import { RetiroService } from 'src/app/services/retiro.service';

@Component({
  selector: 'app-form-retiros',
  templateUrl: './form-retiros.component.html',
  styleUrls: ['./form-retiros.component.css']
})
export class FormRetirosComponent implements OnInit {

  retiro: Retiro = {
    cod_ret: 0,
    fecha: new Date(),
    monto: 0,
    cliente: 0
  }
  titulo: string = 'NUEVO RETIRO'
  boton: string = 'Agregar'

  clientes: Cliente[] = [];
  
  constructor(private service: RetiroService,
              private serviceCli: ClienteService,
              private router: Router,
              private routerActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActivate.params.subscribe({
      next: param => {
        if (param['id'] > 0) {
          this.boton = 'Actualizar';
          this.titulo = 'ACTUALIZAR RETIRO';

          this.service.getById(param['id']).subscribe({
            next: data => {
              this.retiro = data;
            }
          })
        }
      }
    })
    this.serviceCli.getAll().subscribe({
      next: data => {
        this.clientes = data;
        console.log(this.clientes);
      }
    })
  }

  agregar() {
    if (this.retiro.cod_ret! > 0) {
      this.service.update(this.retiro).subscribe({
        next: data => {
          this.router.navigate(['/retiros'])
        }
      })
    } else {
      this.service.create(this.retiro).subscribe({
        next: data => {
          this.router.navigate(['/retiros'])
        }
      })
    }
  }


}
