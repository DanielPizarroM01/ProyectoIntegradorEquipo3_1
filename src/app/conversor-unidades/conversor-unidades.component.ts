import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-unidades',
  templateUrl: './conversor-unidades.component.html',
  styleUrls: ['./conversor-unidades.component.scss']
})
export class ConversorUnidadesComponent {
  unidadEntrada: string = '';
  unidadSalida: string = '';
  valorEntrada: number | null = null;
  resultado: number | null = null;

  conversiones: { [key: string]: number } = {
    cm: 0.01, // Centímetros a metros
    m: 1,     // Base (metros)
    km: 1000, // Kilómetros a metros
  };

  convertir() {
    if (this.unidadEntrada && this.unidadSalida && this.valorEntrada !== null) {
      const valorEnMetros = this.valorEntrada * this.conversiones[this.unidadEntrada];
      this.resultado = valorEnMetros / this.conversiones[this.unidadSalida];
    } else {
      this.resultado = null;
    }
  }
  
  
}
