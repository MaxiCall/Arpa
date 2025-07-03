import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonLabel, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-rifiuti',
  templateUrl: './rifiuti.page.html',
  styleUrls: ['./rifiuti.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class RifiutiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
