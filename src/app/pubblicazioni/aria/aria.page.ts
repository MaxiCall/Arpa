import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-aria',
  templateUrl: './aria.page.html',
  styleUrls: ['./aria.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, CommonModule, FormsModule]
})
export class AriaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
