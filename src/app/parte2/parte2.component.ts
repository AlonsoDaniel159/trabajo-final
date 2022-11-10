import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {    

  clientes: Cliente[] = [];

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: data => {
        this.clientes = data;
      }
    })
  }
  
  eliminar(id: number) {
    this.service.delete(id).subscribe({
      next: resp => {
        this.ngOnInit();
      }
    })
  }

}
