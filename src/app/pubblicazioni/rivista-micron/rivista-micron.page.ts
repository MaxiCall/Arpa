import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rivista-micron',
  templateUrl: './rivista-micron.page.html',
  styleUrls: ['./rivista-micron.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class RivistaMicronPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
