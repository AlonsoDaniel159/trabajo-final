import { Component, OnInit } from '@angular/core';
import { Retiro } from '../interfaces/retiro';
import { RetiroService } from '../services/retiro.service';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.css']
})
export class Parte4Component implements OnInit {

  retiros: Retiro[] = [];

  constructor(private service: RetiroService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: data => {
        this.retiros = data;
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
