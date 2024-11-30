import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ConversorUnidadesComponent } from './conversor-unidades/conversor-unidades.component';
import { FormsModule } from '@angular/forms';  // <-- Add this import

@NgModule({
  declarations: [AppComponent, ConversorUnidadesComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule  // <-- Add FormsModule to enable ngModel
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp({
      "projectId": "proyecto-integrador-2b376",
      "appId": "1:583949730233:web:9b2dc1af6bd28c89a27668",
      "storageBucket": "proyecto-integrador-2b376.firebasestorage.app",
      "apiKey": "AIzaSyDMY_4NmiQoAd4yTHGRBXDePjaAOdsVxmM",
      "authDomain": "proyecto-integrador-2b376.firebaseapp.com",
      "messagingSenderId": "583949730233",
      "measurementId": "G-1682TY1FSN"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
