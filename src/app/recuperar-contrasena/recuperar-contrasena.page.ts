import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController si aún no lo has hecho

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  correo: string = ''; // Declara la propiedad correo

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  regresarAInicio() {
    this.navCtrl.navigateRoot('/home'); // Reemplaza '/home' con la ruta real de tu página de inicio
  }
}
