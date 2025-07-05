import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-biodiversita',
  templateUrl: './biodiversita.page.html',
  styleUrls: ['./biodiversita.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule,
  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class BiodiversitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
