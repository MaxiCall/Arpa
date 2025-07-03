import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel,IonIcon, IonItem,IonList} from '@ionic/angular/standalone';




@Component({
  selector: 'app-suolo',
  templateUrl: './suolo.page.html',
  styleUrls: ['./suolo.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule,IonLabel, IonIcon,IonItem, IonList]
})
export class SuoloPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
