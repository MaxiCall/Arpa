import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonText,    // Para <ion-text>
  IonList,     // Para <ion-list>
  IonItem,     // Para <ion-item>
  IonLabel,    // Para <ion-label>
  IonIcon   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-campi-elettromagnetici',
  templateUrl: './campi-elettromagnetici.page.html',
  styleUrls: ['./campi-elettromagnetici.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonList,  IonText,   // Para <ion-list>
  IonItem,     // Para <ion-item>
  IonLabel,    // Para <ion-label>
  IonIcon ]
})
export class CampiElettromagneticiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
