import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.page.html',
  styleUrls: ['./menu-login.page.scss'],
})
export class MenuLoginPage {
  nombreUsuario: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Recuperar el nombre de usuario almacenado en el almacenamiento local
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
      this.nombreUsuario = nombreGuardado;
    } else {
      // Manejar el caso en el que el nombre de usuario no está almacenado
      this.mostrarMensajeError('Nombre de usuario no encontrado en el almacenamiento local.');
      // Redirigir al usuario a la página de inicio de sesión o hacer otra acción necesaria
      this.navCtrl.navigateRoot('/login'); // Asegúrate de que esta ruta sea correcta
    }
  }

  async mostrarMensajeError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
  cerrarSesion() {
    // Borrar los datos de inicio de sesión almacenados
    localStorage.removeItem('nombreUsuario'); // Borra el nombre de usuario (o cualquier otro dato que hayas almacenado)

    // Redirigir al usuario a la página de inicio
    this.navCtrl.navigateRoot('/home'); // Reemplaza '/inicio' con la ruta real de tu página de inicio
  }
}
