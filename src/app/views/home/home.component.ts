import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carousel = [
    {
      imagen: "assets/img/wall2.jpg",
      carousel: [
        {
          imagen: "assets/img/wall1.jpg",
          frase: "Prueba 1",
          boton: "Aceptar"
        },
        {
          imagen: "assets/img/wall4.jpg",
          frase: "Prueba 2",
          boton: "Ver mas .."
        },
      ]
    },
    {
      imagen: "assets/img/wall3.jpg",
      carousel: [
        {
          imagen: "assets/img/wall5.jpg",
          frase: "Prueba 3",
          boton: "Ver"
        },

      ]
    },
  ]

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 100,
    point: { visible: true },
    touch: true,
    loop: true,
    animation: 'lazy',
  };

  public carouselTileConfig2: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 100,
    point: { visible: true },
    touch: true,
    loop: true,
    animation: 'lazy',
  };

  constructor() { }

  ngOnInit() {
  }

}
