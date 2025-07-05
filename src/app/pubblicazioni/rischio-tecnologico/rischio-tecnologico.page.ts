import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonLabel, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-rischio-tecnologico',
  templateUrl: './rischio-tecnologico.page.html',
  styleUrls: ['./rischio-tecnologico.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule,
  IonList,
  IonItem,
  IonLabel,
  IonIcon]
})
export class RischioTecnologicoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
