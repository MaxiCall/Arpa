import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rifiuti',
  templateUrl: './rifiuti.page.html',
  styleUrls: ['./rifiuti.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule,
  IonAccordionGroup, // For the accordion container
  IonAccordion,     // For individual accordion items
  IonItem,          // For the accordion header
  IonLabel,         // For text within items/headers

  IonList,          // For lists of items
  IonIcon      ]
})
export class RifiutiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
