import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rumore',
  templateUrl: './rumore.page.html',
  styleUrls: ['./rumore.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,
  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class RumorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
