import { Component } from '@angular/core';
import { producto } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    widthImg = 10;
  title = 'my-store';
  nombre: string = 'Roy';
  edad: number = 22;
  img: string = 'https://api.lorem.space/image/face?';
  btnDisable = true;

    registro = {
        nombre: "",
        email:"",
        password: ""
    }


  box = {
    width: 100,
    height: 100,
    background: 'red'
    
  }
  persona = {
    nombre: 'Susan',
    eda: 21,
    imagen:'https://api.lorem.space/image/face?' 
  };
  respuesta = 'si';

  emojis = ['😂', '🐦', '🐳', '🌮', '💚'];

  nombres = ['pepito', 'susancita'];

  newName = '';

  arregloProductos: producto[] = [
    {
      producto: 'Papayita',
      precio: 4.65,
      imagen: 'https://api.lorem.space/image/shoes?',
    },
    {
      producto: 'Lechesita',
      precio: 2.3,
      imagen: 'https://api.lorem.space/image/shoes?',
    },
    {
      producto: 'Almendritas',
      precio: 10.5,
      imagen: 'https://api.lorem.space/image/shoes?',
    },
    {
      producto: 'Platanito',
      precio: 3.2,
      imagen: 'https://api.lorem.space/image/shoes?',
    },
    {
      producto: 'Duraznito',
      precio: 2.5,
      imagen: 'https://api.lorem.space/image/shoes?',
    },
    {
      producto: 'Duraznito',
      precio: 2.5,
      imagen: 'https://api.lorem.space/image/shoes?',
    },
  ];
  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  aumentarEdad() {
    this.edad += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  cambioNombre(event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona.nombre = element.value;
  }

  addName() {
    this.nombres.push(this.newName);
  }

  deleteName(index: number) {
    this.nombres.splice(index, 1);
  }
  onRegister(){
  console.log(this.registro);
      
  }



}