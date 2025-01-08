import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cloudUploadOutline, analyticsOutline } from 'ionicons/icons';
import { TeachablemachineService } from '../services/teachablemachine.service';
import { PercentPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class Tab1Page {
  // Atributos existentes
  topPrediction: any | null = null;

  // Sugerencias para las predicciones
  suggestions: { [key: string]: string } = {
    Barroco: 
      'El Barroco es un estilo artístico caracterizado por su dramatismo, gran detalle y movimiento dinámico. Surgió en Europa durante el siglo XVII.',
    Cubismo: 
      'El Cubismo es una corriente de arte moderna que fragmenta las formas en planos geométricos, popularizada por artistas como Picasso y Braque.',
    Renacimiento: 
      'El Renacimiento fue un movimiento cultural y artístico de los siglos XV y XVI, centrado en la humanidad, la ciencia y el redescubrimiento del arte clásico.',
    Postimpresionismo: 
      'El Postimpresionismo es una evolución del impresionismo, con un enfoque en el simbolismo, las emociones y el uso experimental del color.',
    ArteNaif: 
      'El Arte Naif se caracteriza por su estilo ingenuo, colores vibrantes y una perspectiva simplificada, que a menudo ignora las reglas tradicionales del arte.'
  };

  @ViewChild('image', { static: false }) imageElement!: ElementRef<HTMLImageElement>;

  imageReady = signal(false);
  imageUrl = signal('');
  modelLoaded = signal(false);
  classLabels: string[] = [];
  predictions: any[] = [];

  constructor(private teachablemachine: TeachablemachineService) {
    addIcons({ cloudUploadOutline, analyticsOutline });
  }
  
  async predict() {
    try {
      const image = this.imageElement.nativeElement;
      this.predictions = await this.teachablemachine.predict(image);
      console.log('Predicciones:', this.predictions);
      if (this.predictions?.length > 0) {
        this.topPrediction = this.predictions.reduce((max, current) =>
          current.probability > max.probability ? current : max
        );
      }
    } catch (error) {
      console.error(error);
      alert('Error al realizar la predicción.');
    }
  }
  
  async ngOnInit() {
    await this.teachablemachine.loadModel();
    this.classLabels = this.teachablemachine.getClassLabels();
    this.modelLoaded.set(true);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl.set(reader.result as string);
        this.imageReady.set(true); // Ocultar el mensaje y botón después de subir la foto
      };

      reader.readAsDataURL(file);
    }
  }
}