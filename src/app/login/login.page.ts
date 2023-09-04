import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, AlertController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Variables para almacenar el usuario y la contraseña ingresados por el usuario.
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertController: AlertController,
    private router: Router
  ) {}

  // Función para validar el usuario y la contraseña.
  validarCredenciales() {
    // Recuperar datos de registro del almacenamiento local
    const correoGuardado = localStorage.getItem('correoUsuario');
    const contrasenaGuardada = localStorage.getItem('contrasenaUsuario');
  
    // Verificar si las credenciales coinciden
    if (contrasenaGuardada === this.contrasena) {
      // Credenciales válidas, puedes realizar acciones adicionales aquí
      console.log('Credenciales válidas');
  
      // Redirigir al usuario a la página de inicio o a donde sea necesario
      this.router.navigate(['/menu-login']); // Reemplaza '/inicio' con la ruta real de tu página de inicio
  
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      this.mostrarMensajeError();
    }
  }
  
  async mostrarMensajeError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Credenciales inválidas. Por favor, verifica tu correo y contraseña.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  regresarAInicio() {
    this.navCtrl.navigateRoot('/home'); // Reemplaza '/inicio' con la ruta real de tu página de inicio
  }
}