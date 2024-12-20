import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro!: FormGroup;

  constructor(public fb: FormBuilder,
  public alertController: AlertController,
  public nacvCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo' : new FormControl ("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'Tienes que llenar todos los datos',
        header: 'Datos Incompletos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      correo: f.correo,
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('iniciar sesion', 'true');
    this.nacvCtrl.navigateRoot('login');
  }
}
