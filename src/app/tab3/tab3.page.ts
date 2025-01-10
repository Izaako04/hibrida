import { Component } from '@angular/core';
import { IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle,
    ExploreContainerComponent,
    IonicModule,
    CommonModule,
  ],
})
export class Tab3Page {
  constructor() {}

  members = [
    {
      name: 'Isaac Criollo',
      role: 'Full Stack',
      photo: 'assets/images/isaac.jpeg', // Replace with your image path
    },
    {
      name: 'Paulette Maldonado',
      role: 'AI Specialist',
      photo: 'assets/images/paulette.jpeg', // Replace with your image path
    },
    {
      name: 'Piero Pazmiño',
      role: 'Backend Developer',
      photo: 'assets/images/piero.jpg', // Replace with your image path
    },
  ];




}