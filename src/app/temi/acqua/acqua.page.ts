import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-acqua',
  templateUrl: './acqua.page.html',
  styleUrls: ['./acqua.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonContent, CommonModule, FormsModule]
})
export class AcquaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
