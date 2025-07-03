import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,

  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-sviluppo-sostenibile',
  templateUrl: './sviluppo-sostenibile.page.html',
  styleUrls: ['./sviluppo-sostenibile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    
    IonList,
    IonItem,
    IonLabel,
    IonIcon
  ]
})
export class SviluppoSostenibilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}