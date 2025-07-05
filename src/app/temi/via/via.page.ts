import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonIcon, IonItem, IonLabel, IonList, IonText,   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-via',
  templateUrl: './via.page.html',
  styleUrls: ['./via.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class ViaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
