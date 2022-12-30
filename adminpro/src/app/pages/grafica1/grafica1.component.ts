import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
 

  public labels1: string[]=['Ventas descargas','Ventas tienda','Ventas online']
  public labels2: string[]=['Ingresos','Variables','n/s']
  public data1 = [[ 350, 450, 100 ], ]
}
