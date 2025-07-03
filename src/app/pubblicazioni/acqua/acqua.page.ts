import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone'; // Estos son los componentes Ionic más comunes para contenido y listas

@Component({
  selector: 'app-acqua',
  templateUrl: './acqua.page.html',
  styleUrls: ['./acqua.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, CommonModule, FormsModule]
})
export class AcquaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
