import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonText,    // Para <ion-text>
  IonList,     // Para <ion-list>
  IonItem,     // Para <ion-item>
  IonLabel,    // Para <ion-label>
  IonIcon   ,IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bonifica',
  templateUrl: './bonifica.page.html',
  styleUrls: ['./bonifica.page.scss'],
  standalone: true,
  imports: [IonList, IonItem,   IonText,  
  IonLabel,    
  IonIcon ,IonContent,  CommonModule, FormsModule]
})
export class BonificaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
