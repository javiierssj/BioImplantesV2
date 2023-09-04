import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) {}

  async registrarUsuario() {
    // Validar el formato del correo electrónico y la contraseña aquí
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const contrasenaPattern = /^(?=(?:[^A-Za-z]*[A-Za-z]){3})(?=(?:\D*\d){4})[A-Za-z\d]{10,}$/;
;

    if (!emailPattern.test(this.correo)) {
      this.mostrarMensajeError('El correo electrónico no es válido.');
      return;
    }

    if (!contrasenaPattern.test(this.contrasena)) {
      this.mostrarMensajeError('La contraseña debe tener al menos 10 caracteres alfanuméricos.');
      return;
    }

    localStorage.setItem('nombreUsuario', this.nombre);
    localStorage.setItem('correoUsuario', this.correo);
    localStorage.setItem('contrasenaUsuario', this.contrasena);

    this.mostrarRegistroExitoso();
    this.redirigirAInicioDeSesion();
    
  }

  async mostrarMensajeError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mostrarRegistroExitoso() {
    const mensaje = `Nombre: ${this.nombre}\nCorreo Electrónico: ${this.correo}`;
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  redirigirAInicioDeSesion() {
    this.router.navigate(['/login']); // Reemplaza '/login' con la ruta real de tu página de inicio de sesión
  }
  regresarAInicio() {
    this.navCtrl.navigateRoot('/home'); // Reemplaza '/inicio' con la ruta real de tu página de inicio
  }
  
}
