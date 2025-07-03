/// <reference types="google.maps" />
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd, Data } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonRouterOutlet,
  IonButton,
} from '@ionic/angular/standalone';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonRouterOutlet,
    IonButton,
  ],
})
export class AppComponent implements OnInit {
  currentTitle: string = 'Arpa Umbria';
  title: string = 'Arpa Umbria';
  isDarkMode: boolean = false;
  activeSubmenu: string | null = null;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private platformTitle: Title,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.setupTitleUpdateListener();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  async navigateTo(path: string) {
    await this.router.navigate([path], { replaceUrl: true });
    this.menuCtrl.close('main-menu');
  }

  private setupTitleUpdateListener() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data;
        }),
        filter((data: Data) => 'title' in data)
      )
      .subscribe(
        (data: Data) => {
          const pageTitle = (data['title'] as string) ?? 'Página';
          this.currentTitle = pageTitle;
          this.platformTitle.setTitle(pageTitle);
        },
        (error) => {
          console.error('Error updating page title:', error);
        }
      );
  }
}
