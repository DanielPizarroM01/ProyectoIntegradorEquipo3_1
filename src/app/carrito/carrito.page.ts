import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: any[] = []; 
  total: number = 0;   

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarCarrito(); 
  }

  
  cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
      this.calcularTotal();
    }
  }

 
  eliminarProducto(producto: any) {
    this.carrito = this.carrito.filter(item => item !== producto);
    this.guardarCarrito();
    this.calcularTotal();
  }

  
  guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  
  calcularTotal() {
    this.total = this.carrito.reduce((acc, producto) => acc + producto.precio, 0);
  }
  volverInicio() {
    this.navCtrl.navigateBack('/catalogo'); 
  }
  
}

