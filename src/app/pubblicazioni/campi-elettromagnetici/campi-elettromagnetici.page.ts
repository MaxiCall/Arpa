import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonIcon, IonItem, IonLabel, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-campi-elettromagnetici',
  templateUrl: './campi-elettromagnetici.page.html',
  styleUrls: ['./campi-elettromagnetici.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonIcon]
})
export class CampiElettromagneticiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
