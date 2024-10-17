import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

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

  constructor(private router: Router) {   
    
    this.cargarCitas();
  }

  ngOnInit() {}

  
  agendarCita() {
    if (this.fecha && this.hora && this.motivo) {
      const nuevaCita = {
        fecha: this.fecha,
        hora: this.hora,
        motivo: this.motivo,
      };

      this.citas.push(nuevaCita); 
      this.guardarCitas();       
      this.limpiarFormulario();   
    } else {
      alert('Por favor, complete todos los campos antes de agendar la cita.');
    }
  }

  
  eliminarCita(cita: any) {
    this.citas = this.citas.filter(item => item !== cita);
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
