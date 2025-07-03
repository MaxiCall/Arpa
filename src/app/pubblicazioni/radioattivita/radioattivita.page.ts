import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-radioattivita',
  templateUrl: './radioattivita.page.html',
  styleUrls: ['./radioattivita.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,  IonList,
    IonItem,
    IonLabel,
    IonIcon]
})
export class RadioattivitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
