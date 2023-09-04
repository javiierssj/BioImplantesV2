import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.page.html',
  styleUrls: ['./bodega.page.scss'],
})
export class BodegaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirPagina(pagina: string) {
    if (pagina === 'Bodega') {
      // Navegar a la página de Bodega
      this.router.navigate(['/bodega']); // Asegúrate de definir la ruta correcta
    } else if (pagina === 'Despachos') {
      // Navegar a la página de Despachos
      this.router.navigate(['/despachos']); // Asegúrate de definir la ruta correcta
    }
  }

  navegar(opcion: string) {
    if (opcion === 'Cuenta') {
      // Navegar a la ruta "/menu-login"
      this.router.navigate(['/menu-login']);
    } else {
      // Agrega lógica para otras opciones de menú aquí
    }
  }
}
