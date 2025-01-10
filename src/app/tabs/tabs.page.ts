import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, peopleCircle, clipboardOutline, rocket, heartCircleOutline, happyOutline, calendarOutline, peopleCircleOutline, homeOutline, pieChartOutline, colorPaletteOutline, personOutline, imagesOutline, cameraOutline, imageOutline, albumsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({homeOutline,albumsOutline,colorPaletteOutline,personOutline,imageOutline,cameraOutline,imagesOutline,pieChartOutline,happyOutline,calendarOutline,heartCircleOutline,peopleCircleOutline,peopleCircle,rocket,clipboardOutline,triangle,ellipse,square});
  }
}
