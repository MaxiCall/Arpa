import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonItem, IonLabel, IonList,IonIcon, IonText} from '@ionic/angular/standalone';


@Component({
  selector: 'app-aria',
  templateUrl: './aria.page.html',
  styleUrls: ['./aria.page.scss'],
  standalone: true,
  imports: [IonText,IonLabel, IonItem, IonList, IonContent,IonIcon, CommonModule, FormsModule]
})
export class AriaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
