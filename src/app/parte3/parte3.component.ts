import { Component, OnInit } from '@angular/core';
import { Deposito } from '../interfaces/deposito';
import { DepositoService } from '../services/deposito.service';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.css']
})
export class Parte3Component implements OnInit {

  depositos: Deposito[] = [];

  constructor(private service: DepositoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: data => {
        this.depositos = data;
      }
    })
  }

  eliminar(codigo: number) {
    this.service.delete(codigo).subscribe({
      next: resp => {
        this.ngOnInit();
      }
    })
  }

}
