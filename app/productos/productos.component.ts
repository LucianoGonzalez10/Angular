import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Importa FormsModule para ngModel
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Producto A', precio: 100, descuento: true },
    { id: 2, nombre: 'Producto B', precio: 200, descuento: false },
    { id: 3, nombre: 'Producto C', precio: 300, descuento: true },
    { id: 4, nombre: 'Producto D', precio: 400, descuento: false },
    { id: 5, nombre: 'Producto E', precio: 500, descuento: false },
    { id: 6, nombre: 'Producto F', precio: 600, descuento: true }
  ];

  nuevoNombre = ''; // Propiedad para el nombre del nuevo producto
  nuevoPrecio: number | null = null; // Propiedad para el precio del nuevo producto
  nuevoDescuento = false; // Puedes agregar un campo para gestionar el descuento si lo deseas

  agregarProducto() {
    if (this.nuevoNombre && this.nuevoPrecio !== null) {
      const nuevoProducto = {
        id: this.productos.length + 1, // Genera un ID secuencial
        nombre: this.nuevoNombre,
        precio: this.nuevoPrecio,
        descuento: this.nuevoDescuento // Valor por defecto, puedes cambiarlo
      };
      
      this.productos.push(nuevoProducto);

      // Reiniciar los campos del formulario
      this.nuevoNombre = '';
      this.nuevoPrecio = null;
    }
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }

  toggleDescuento(producto: any) {
    producto.descuento = !producto.descuento; // Cambia el estado del descuento
  }
}
