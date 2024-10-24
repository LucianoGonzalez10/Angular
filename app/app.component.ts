import { Component } from '@angular/core';
import { ProductosComponent } from './productos/productos.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Esto indica que el componente `app` también es independiente
  imports: [ProductosComponent] // Importa aquí el componente ProductosComponent
})
export class AppComponent { 
  title = 'Mi Aplicación de Productos';
}
