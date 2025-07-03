import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-certificazioni',
  templateUrl: './certificazioni.page.html',
  styleUrls: ['./certificazioni.page.scss'],
  standalone: true,
  imports: [IonContent,    CommonModule, FormsModule, IonList,    // Para <ion-list>
  IonItem,    // Para <ion-item>
  IonLabel,   // Para <ion-label>
  IonIcon  ]
})
export class CertificazioniPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
