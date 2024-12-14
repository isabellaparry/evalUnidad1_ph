import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrianguloEquilatero, TrianguloEscaleno } from '../models/figuras';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule],
})
export class TrianguloComponent {
  trianguloSeleccionado: string | null = null;

  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
      if (this.trianguloSeleccionado == 'escaleno') {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.perimetro = triangulo.calcularPerimetro();
    } else {
      const triangulo = new TrianguloEquilatero(this.ladoA);
      this.perimetro = triangulo.calcularPerimetro();
    }
  }
}
