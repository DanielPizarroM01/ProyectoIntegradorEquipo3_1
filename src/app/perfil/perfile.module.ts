import { NgModule } from '@angular/core'; // Módulo principal de Angular
import { CommonModule } from '@angular/common'; // Módulo para características comunes como *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Módulo para trabajar con formularios
import { IonicModule } from '@ionic/angular'; // Módulo de Ionic para componentes nativos

import { PerfilPageRoutingModule } from './perfil-routing.module'; // Archivo de rutas para esta página
import { PerfilPage } from './perfil.page'; // Página del perfil

@NgModule({
  imports: [
    CommonModule, // Habilita directivas como *ngIf y *ngFor
    FormsModule, // Habilita [(ngModel)] y otros elementos de formulario
    IonicModule, // Proporciona componentes de Ionic como ion-button, ion-input, etc.
    PerfilPageRoutingModule, // Ruta específica para esta página
  ],
  declarations: [PerfilPage], // Declara el componente asociado a este módulo
})
export class PerfilPageModule {}
