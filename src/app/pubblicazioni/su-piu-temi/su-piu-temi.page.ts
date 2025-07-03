import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-su-piu-temi',
  templateUrl: './su-piu-temi.page.html',
  styleUrls: ['./su-piu-temi.page.scss'],
  standalone: true,
  imports: [IonContent,   CommonModule, FormsModule,
  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class SuPiuTemiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
