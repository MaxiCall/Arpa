import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.page.html',
  styleUrls: ['./ricette.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard, IonCardContent, IonCardTitle]
})
export class RicettePage implements OnInit {

    navigateTo(path: string) {
    this.router.navigate([path]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
