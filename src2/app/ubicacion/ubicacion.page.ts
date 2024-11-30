import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonHeader, IonicModule } from '@ionic/angular';



declare var google: any;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    
  ],
 
})
export class MapsPage implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    
    const mapDiv = document.getElementById('map') as HTMLElement;

    
    const options = {
      center: { lat: 0, lng: 0 },
      zoom: 15
    };

    
    this.map = new google.maps.Map(mapDiv, options);

    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        
        this.map.setCenter(userLocation);

        
        new google.maps.Marker({
          position: userLocation,
          map: this.map,
          title: 'Tu ubicación'
        });

      }, () => {
        alert('No se pudo obtener la ubicación.');
      });
    } else {
      alert('El navegador no soporta la geolocalización.');
    }
  }
}
