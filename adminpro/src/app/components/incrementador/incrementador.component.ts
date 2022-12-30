import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{



  ngOnInit(): void {

    this.btnClass = `btn ${this.btnClass}`


  }

  // el componente padre envía valor al hijo
  @Input('valor') progreso: number = 10 // hhace el mismo efecto que la función get

  @Input() btnClass: string  ="btn btn-primary"

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter()

  // get getPorcentaje(){
  //   return `${this.progreso}%`

  // }

  cambiarValor(valor: number){

    if ((this.progreso + valor) > 100){

      this.valorSalida.emit(100)
      this.progreso = 100;
    } else {
      if ((this.progreso + valor) < 0){

        this.valorSalida.emit(0)
        this.progreso = 0;
      } else {

        this.valorSalida.emit(this.progreso)
        this.progreso = this.progreso + valor;
      }
    }
  }


  onChange( nuevoValor: number){
  
    if(nuevoValor >= 100){
      this.progreso = 100
    }else if( nuevoValor <= 0){
      this.progreso = 0
    } else{
      this.progreso = nuevoValor
    }

     this.valorSalida.emit(this.progreso)
  }

}
