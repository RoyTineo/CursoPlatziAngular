import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  nombre: string = "Roy"
  edad:number = 22
  video:string = "https://i.ytimg.com/vi/kEE6CFKGDIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5zlLIwFCJiprhJ7w75K9BeemxtQ"
}
