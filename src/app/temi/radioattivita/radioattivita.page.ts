import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonText,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-radioattivita',
  templateUrl: './radioattivita.page.html',
  styleUrls: ['./radioattivita.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule,
  IonText,    // Para <ion-text>
  IonList,     // Para <ion-list>
  IonItem,     // Para <ion-item>
  IonLabel,    // Para <ion-label>
  IonIcon  ]
})
export class RadioattivitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
