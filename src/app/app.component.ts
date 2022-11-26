import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  nombre: string = 'Roy';
  edad: number = 22;
  img: string = 'https://source.unsplash.com/random';
  btnDisable = true;
  persona = {
    nombre: 'Susan',
    eda: 21,
  };
  respuesta = 'si';

  emojis = ['😂', '🐦', '🐳', '🌮', '💚'];

  nombres = ['pepito','susancita'];

  newName=""


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

  addName(){
    this.nombres.push(this.newName)
  }

  deleteName(index:number){
    this.nombres.splice(index,1)
  }
}
