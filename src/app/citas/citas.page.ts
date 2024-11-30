import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  fecha: string = '';
  hora: string = '';
  motivo: string = '';
  citas: any[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController // Importamos AlertController
  ) {
    this.cargarCitas();
  }

  ngOnInit() {}

  async agendarCita() {
    if (this.fecha && this.hora && this.motivo) {
      const nuevaCita = {
        fecha: this.fecha,
        hora: this.hora,
        motivo: this.motivo,
      };

      this.citas.push(nuevaCita);
      this.guardarCitas();
      this.limpiarFormulario();

      
      const alert = await this.alertController.create({
        header: 'Cita Registrada',
        message: '¡Tu cita ha sido registrada con éxito!',
        buttons: ['Aceptar'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Campos Incompletos',
        message: 'Por favor, completa todos los campos antes de agendar la cita.',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }

  eliminarCita(cita: any) {
    this.citas = this.citas.filter((item) => item !== cita);
    this.guardarCitas();
  }

  guardarCitas() {
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  cargarCitas() {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      this.citas = JSON.parse(citasGuardadas);
    }
  }

  limpiarFormulario() {
    this.fecha = '';
    this.hora = '';
    this.motivo = '';
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
  }
}
