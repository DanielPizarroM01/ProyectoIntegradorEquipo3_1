import { Component } from '@angular/core'; 
import { AlertController } from '@ionic/angular'; 
import { Router } from '@angular/router';  // Asegúrate de importar Router

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  nombre: string = ''; 
  correo: string = ''; 
  foto: string = ''; 

  constructor(private alertController: AlertController, private router: Router) {
    this.cargarPerfil(); 
    
  }// Método para navegar al inicio
  irAlInicio() {
    this.router.navigate(['/inicio']); // Redirige al path raíz ('/')
  }

 
  cargarPerfil() {
    const datos = localStorage.getItem('perfil'); 
    if (datos) {
      const { nombre, correo, foto } = JSON.parse(datos); 
      this.nombre = nombre;
      this.correo = correo;
      this.foto = foto;
    }
  }

  guardarPerfil() {
    if (this.nombre.trim() === '' || this.correo.trim() === '') {
      this.mostrarAlerta('Error', 'El nombre y el correo son obligatorios.');
      return;
    }

    localStorage.setItem(
      'perfil',
      JSON.stringify({ nombre: this.nombre, correo: this.correo, foto: this.foto })
    ); // Guardar el perfil en localStorage

    this.mostrarAlerta('Éxito', 'Tu perfil ha sido actualizado.');
  }

 
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  
}

