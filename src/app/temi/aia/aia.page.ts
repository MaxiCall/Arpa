import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-aia',
  templateUrl: './aia.page.html',
  styleUrls: ['./aia.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem,IonList, IonContent, CommonModule, FormsModule]
})
export class AiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
