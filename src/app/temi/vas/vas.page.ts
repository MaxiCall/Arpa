import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vas',
  templateUrl: './vas.page.html',
  styleUrls: ['./vas.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,

  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class VasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
