import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {}

  /**
   * Navegar a una ruta específica
   * @param route Nombre de la ruta
   */
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  /**
   * Navegar a la página de preguntas
   */
  irpreguntas() {
    this.navCtrl.navigateRoot('preguntasres');
  }

  /**
   * Navegar al carrito
   */
  irAlCarrito() {
    this.navCtrl.navigateForward('/carrito');
  }

  /**
   * Cerrar sesión
   */
  salir() {
    localStorage.clear(); // Limpia los datos almacenados
    this.navCtrl.navigateRoot('login');
  }

  ngOnInit() {}
}
