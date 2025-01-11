import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { medkitOutline, personCircleOutline, femaleSharp, maleSharp } from 'ionicons/icons';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class Tab4Page {
  constructor() {
    addIcons({maleSharp,femaleSharp,personCircleOutline,medkitOutline});
  }
}