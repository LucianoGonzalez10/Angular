import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
