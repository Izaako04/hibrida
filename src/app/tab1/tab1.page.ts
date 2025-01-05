import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Importa CommonModule e IonicModule
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.2,
  };

  images = [
    'https://via.placeholder.com/300x200.png?text=Imagen+1',
    'https://via.placeholder.com/300x200.png?text=Imagen+2',
    'https://via.placeholder.com/300x200.png?text=Imagen+3',
  ];

  constructor() {}
}
