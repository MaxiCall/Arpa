import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonItem, IonLabel, IonList, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-biodiversita',
  templateUrl: './biodiversita.page.html',
  styleUrls: ['./biodiversita.page.scss'],
  standalone: true,
  imports: [ IonText, // Include it in imports
    IonList, // Include it in imports
    IonItem, // Include it in imports
    IonLabel, // Include it in imports
    RouterLink, IonContent, CommonModule, FormsModule]
})
export class BiodiversitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
