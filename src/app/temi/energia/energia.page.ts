import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonIcon, IonItem, IonLabel, IonList, IonText} from '@ionic/angular/standalone';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.page.html',
  styleUrls: ['./energia.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule, IonText,    // Para <ion-text>
  IonList,     // Para <ion-list>
  IonItem,     // Para <ion-item>
  IonLabel,    // Para <ion-label>
  IonIcon    ]
})
export class EnergiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
