// src/app/semi/mappa-semi/mappa-semi.page.ts

import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

interface Semilla {
  id: string;
  name: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  origin: string;
  imageUrl: string;
  lat: number;
  lng: number;
}
declare const google: any;
@Component({
  selector: 'app-mappa-semi',
  templateUrl: './mappa-semi.page.html',
  styleUrls: ['./mappa-semi.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons,  IonButton, IonIcon]
})
export class MappaSemiPage implements OnInit, AfterViewInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map: any;
  infoWindow: any;


  
  variedades: Semilla[] = [
    { id: 'cavolo-di-costacciaro', name: 'Cavolo di Costacciaro', type: 'Cavolo', shortDescription: 'Varietà antica delle zone montuose.', longDescription: 'Il Cavolo di Costacciaro è una varietà antica, coltivata tradizionalmente nelle zone montuose dell\'Umbria.', origin: 'Costacciaro, Umbria', imageUrl: 'assets/cavolo-di-costacciaro.jpg', lat: 43.374, lng: 12.713 },
    { id: 'cima-di-rapa', name: 'Cima di rapa', type: 'Cima di rapa', shortDescription: 'Ortaggio tipico umbro.', longDescription: 'La Cima di rapa è un ortaggio tipico della cucina umbra.', origin: 'Terni, Umbria', imageUrl: 'assets/cima-di-rapa.jpg', lat: 42.563, lng: 12.642 },
    { id: 'cocomero-nero', name: 'Cocomero nero', type: 'Cocomero', shortDescription: 'Varietà di anguria locale.', longDescription: 'Il Cocomero Nero è una varietà di anguria coltivata in Umbria.', origin: 'Marsciano, Umbria', imageUrl: 'assets/cocomero-nero.jpg', lat: 42.913, lng: 12.340 },
    { id: 'fagiolina-del-trasimeno', name: 'Fagiolina del Trasimeno', type: 'Legume', shortDescription: 'Legume antico e pregiato.', longDescription: 'La Fagiolina del Trasimeno è un legume antico e pregiato.', origin: 'Lago Trasimeno, Umbria', imageUrl: 'assets/fagiolina-del-trasimeno.jpg', lat: 43.128, lng: 12.127 },
    { id: 'fagiolino-verde-nano', name: 'Fagiolino verde nano', type: 'Legume', shortDescription: 'Varietà di fagiolino umbro.', longDescription: 'Il Fagiolino verde nano è una varietà di fagiolino tipica di Foligno.', origin: 'Foligno, Umbria', imageUrl: 'assets/fagiolino-verde-nano.jpg', lat: 42.954, lng: 12.701 },
    { id: 'cipolla-gialla', name: 'Cipolla gialla', type: 'Ortaggio', shortDescription: 'Cipolla tipica di Cannara.', longDescription: 'La Cipolla Gialla è una varietà molto diffusa a Cannara.', origin: 'Cannara, Umbria', imageUrl: 'assets/cipolla-gialla.jpg', lat: 43.022, lng: 12.553 },
    { id: 'erba-medica', name: 'Erba medica', type: 'Foraggera', shortDescription: 'Pianta foraggera diffusa in Valnerina.', longDescription: 'L\'Erba Medica è una pianta foraggera tipica della Valnerina.', origin: 'Valnerina, Umbria', imageUrl: 'assets/erba-medica.jpg', lat: 42.721, lng: 12.888 },
    { id: 'insalata-spadona-rossa', name: 'Insalata spadona rossa', type: 'Ortaggio', shortDescription: 'Varietà di lattuga umbra.', longDescription: 'L\'Insalata Spadona Rossa è una varietà di lattuga tipica di Perugia.', origin: 'Perugia, Umbria', imageUrl: 'assets/insalata-spadona-rossa.jpg', lat: 43.112, lng: 12.388 },
    { id: 'lupinella', name: 'Lupinella', type: 'Foraggera', shortDescription: 'Pianta foraggera di Montefalco.', longDescription: 'La Lupinella è una pianta foraggera tipica di Montefalco.', origin: 'Montefalco, Umbria', imageUrl: 'assets/lupinella.jpg', lat: 42.892, lng: 12.646 },
    { id: 'quarantino-giallo', name: 'Quarantino giallo', type: 'Cereale', shortDescription: 'Mais autoctono di Gubbio.', longDescription: 'Il Quarantino Giallo è una varietà di mais autoctona di Gubbio.', origin: 'Gubbio, Umbria', imageUrl: 'assets/quarantino-giallo.jpg', lat: 43.351, lng: 12.573 },
    { id: 'quarantino-rosso', name: 'Quarantino rosso', type: 'Cereale', shortDescription: 'Mais rosso di Spoleto.', longDescription: 'Il Quarantino Rosso è una varietà di mais tipica di Spoleto.', origin: 'Spoleto, Umbria', imageUrl: 'assets/quarantino-rosso.jpg', lat: 42.740, lng: 12.738 },
    { id: 'rapi-del-trasimeno', name: 'Rapi del Trasimeno', type: 'Ortaggio', shortDescription: 'Broccoletti tipici del Trasimeno.', longDescription: 'I Rapi del Trasimeno sono una varietà di broccoletti tipici.', origin: 'Passignano sul Trasimeno, Umbria', imageUrl: 'assets/rapi-del-trasimeno.jpg', lat: 43.188, lng: 12.140 },
    { id: 'sedano-sellerino', name: 'Sedano sellerino', type: 'Ortaggio', shortDescription: 'Sedano di Trevi.', longDescription: 'Il Sedano Sellerino è una varietà di sedano tipica di Trevi.', origin: 'Trevi, Umbria', imageUrl: 'assets/sedano-sellerino.jpg', lat: 42.879, lng: 12.743 },
    { id: 'fagiolo-grigio', name: 'Fagiolo grigio', type: 'Legume', shortDescription: 'Fagiolo tipico di Bevagna.', longDescription: 'Un tipo di fagiolo grigio tipico di Bevagna.', origin: 'Bevagna, Umbria', imageUrl: 'assets/fagiolo-grigio.jpg', lat: 42.936, lng: 12.606 },
    { id: 'fagiolo-mezza-rama', name: 'Fagiolo mezza rama', type: 'Legume', shortDescription: 'Fagiolo di Deruta.', longDescription: 'Un tipo di fagiolo di media rama tipico di Deruta.', origin: 'Deruta, Umbria', imageUrl: 'assets/fagiolo-mezza-rama.jpg', lat: 42.987, lng: 12.418 },
    { id: 'fagiolo-s-pietro', name: 'Fagiolo S.Pietro', type: 'Legume', shortDescription: 'Fagiolo di San Pietro.', longDescription: 'Un tipo di fagiolo S. Pietro tipico di Perugia.', origin: 'San Pietro, Perugia', imageUrl: 'assets/fagiolo-s-pietro.jpg', lat: 43.104, lng: 12.389 },
    { id: 'fave', name: 'Fave', type: 'Legume', shortDescription: 'Fave di Orvieto.', longDescription: 'Le fave sono un legume tipico di Orvieto.', origin: 'Orvieto, Umbria', imageUrl: 'assets/fave.jpg', lat: 42.718, lng: 12.111 },
    { id: 'favino', name: 'Favino', type: 'Foraggera', shortDescription: 'Favino di Amelia.', longDescription: 'Il favino è una pianta foraggera tipica di Amelia.', origin: 'Amelia, Umbria', imageUrl: 'assets/favino.jpg', lat: 42.557, lng: 12.415 },
    { id: 'melanzana', name: 'Melanzana', type: 'Ortaggio', shortDescription: 'Melanzana di Bastia Umbra.', longDescription: 'La melanzana è un ortaggio tipico di Bastia Umbra.', origin: 'Bastia Umbra, Umbria', imageUrl: 'assets/melanzana.jpg', lat: 43.065, lng: 12.543 },
    { id: 'pomodoro-a-grappolo', name: 'Pomodoro a grappolo', type: 'Ortaggio', shortDescription: 'Pomodoro di Assisi.', longDescription: 'Il pomodoro a grappolo è tipico di Assisi.', origin: 'Assisi, Umbria', imageUrl: 'assets/pomodoro-a-grappolo.jpg', lat: 43.070, lng: 12.617 },
    { id: 'pomodoro-da-appendere', name: 'Pomodoro da appendere', type: 'Ortaggio', shortDescription: 'Pomodoro di Spello.', longDescription: 'Il pomodoro da appendere è tipico di Spello.', origin: 'Spello, Umbria', imageUrl: 'assets/pomodoro-da-appendere.jpg', lat: 42.989, lng: 12.670 },
    { id: 'pomodoro-da-conserva', name: 'Pomodoro da conserva', type: 'Ortaggio', shortDescription: 'Pomodoro di Montefalco.', longDescription: 'Il pomodoro da conserva è tipico di Montefalco.', origin: 'Montefalco, Umbria', imageUrl: 'assets/pomodoro-da-conserva.jpg', lat: 42.894, lng: 12.651 },
    { id: 'pomodoro-francescano', name: 'Pomodoro francescano', type: 'Ortaggio', shortDescription: 'Pomodoro di Assisi.', longDescription: 'Il pomodoro francescano è tipico di Assisi.', origin: 'Assisi, Umbria', imageUrl: 'assets/pomodoro-francescano.jpg', lat: 43.070, lng: 12.617 },
    { id: 'pomodoro-san-marzano', name: 'Pomodoro San Marzano', type: 'Ortaggio', shortDescription: 'Pomodoro di Spoleto.', longDescription: 'Il pomodoro San Marzano è coltivato anche a Spoleto.', origin: 'Spoleto, Umbria', imageUrl: 'assets/pomodoro-san-marzano.jpg', lat: 42.740, lng: 12.738 },
    { id: 'pomodoro-tondo-grande', name: 'Pomodoro tondo grande', type: 'Ortaggio', shortDescription: 'Pomodoro di Todi.', longDescription: 'Il pomodoro tondo grande è tipico di Todi.', origin: 'Todi, Umbria', imageUrl: 'assets/pomodoro-tondo-grande.jpg', lat: 42.780, lng: 12.409 },
    { id: 'zucca-a-fiasco', name: 'Zucca a fiasco', type: 'Ortaggio', shortDescription: 'Zucca di Castiglione del Lago.', longDescription: 'La zucca a fiasco è tipica di Castiglione del Lago.', origin: 'Castiglione del Lago, Umbria', imageUrl: 'assets/zucca-a-fiasco.jpg', lat: 43.126, lng: 12.045 },
    { id: 'zucca-da-maiali', name: 'Zucca da maiali', type: 'Ortaggio', shortDescription: 'Zucca di Città di Castello.', longDescription: 'La zucca da maiali è tipica di Città di Castello.', origin: 'Città di Castello, Umbria', imageUrl: 'assets/zucca-da-maiali.jpg', lat: 43.465, lng: 12.241 },
    { id: 'zucca-dolce', name: 'Zucca dolce', type: 'Ortaggio', shortDescription: 'Zucca di Gualdo Tadino.', longDescription: 'La zucca dolce è tipica di Gualdo Tadino.', origin: 'Gualdo Tadino, Umbria', imageUrl: 'assets/zucca-dolce.jpg', lat: 43.233, lng: 12.782 },
  ];
  private filterType: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterType = params['filterType'] || null;
      console.log('NGONINIT: Tipo de filtro obtenido:', this.filterType);
    });
  }

  goToMap() {
  this.router.navigate(['/mappa-semi']);
}

  goToList() {
    this.router.navigate(['/lista-semi']);
  }
  ngAfterViewInit() {
    console.log('NGAFTERVIEWINIT: Iniciando carga del mapa...');
    this.loadMap(this.filterType);
  }

  async loadMap(filterType?: string | null, fromSearch: boolean = false) {
    const defaultLat = 42.5;
    const defaultLng = 12.5;

    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      console.error('Google Maps API no está cargada.');
      return;
    }

    if (!this.mapElement || !this.mapElement.nativeElement) {
      console.error('El elemento del mapa (#map) no está disponible.');
      return;
    }

    const mapOptions: google.maps.MapOptions = {
      center: { lat: defaultLat, lng: defaultLng },
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.infoWindow = new google.maps.InfoWindow();

    let seedsToDisplay: Semilla[] = [];
    if (filterType) {
      seedsToDisplay = this.variedades.filter(seed => seed.type === filterType);
      console.log('Semillas filtradas:', seedsToDisplay);
    } else {
      seedsToDisplay = this.variedades;
      console.log('Mostrando todas las semillas:', seedsToDisplay);
    }

    if (this.map && this.map.data) {
      // Limpiar marcadores previos si es posible
      this.map = null;
    }

    if (seedsToDisplay.length > 0) {
      // Volver a crear el mapa para limpiar marcadores
      const mapOptions: google.maps.MapOptions = {
        center: { lat: 42.5, lng: 12.5 },
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.infoWindow = new google.maps.InfoWindow();
      this.addMarkers(seedsToDisplay);

      const bounds = new google.maps.LatLngBounds();
      seedsToDisplay.forEach(seed => {
        if (typeof seed.lat === 'number' && typeof seed.lng === 'number' && !isNaN(seed.lat) && !isNaN(seed.lng)) {
          bounds.extend(new google.maps.LatLng(seed.lat, seed.lng));
        }
      });

      if (!bounds.isEmpty()) {
        this.map.fitBounds(bounds);
      }
    }
  }

  addMarkers(seeds: Semilla[]) {
    seeds.forEach(seed => {
      // Personalización del icono del marcador
      const marker = new google.maps.Marker({
        position: { lat: seed.lat, lng: seed.lng },
        map: this.map,
        title: seed.name,
        icon: {
          url: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png', // Puedes cambiar por un SVG propio en assets si lo deseas
          scaledSize: new google.maps.Size(38, 38),
          anchor: new google.maps.Point(19, 38)
        },
        // Puedes agregar animación si lo deseas:
        animation: google.maps.Animation.DROP
      });

      // Mejor estilo para el popup/infowindow
      const contentString = `
        <div style="max-width: 270px; font-family: 'Segoe UI', Arial, sans-serif; color: #222;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${seed.imageUrl}" alt="${seed.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px; border: 2px solid #e0c36a; box-shadow: 0 2px 8px #0002;" />
            <div>
              <h3 style="margin: 0 0 4px 0; font-size: 1.1em; color: #b48a00;">${seed.name}</h3>
              <span style="font-size: 0.95em; background: #fffbe6; color: #b48a00; border-radius: 6px; padding: 2px 8px; border: 1px solid #e0c36a;">${seed.type}</span>
            </div>
          </div>
          <p style="margin: 10px 0 6px 0; font-size: 0.98em;">${seed.shortDescription}</p>
          <p style="margin: 0 0 6px 0; font-size: 0.93em; color: #666;"><strong>Origine:</strong> ${seed.origin}</p>
          <button id="dettagli-btn-${seed.id}" style="margin-top: 8px; background: #b48a00; color: #fff; border: none; border-radius: 6px; padding: 6px 16px; font-size: 1em; cursor: pointer; transition: background 0.2s;">Dettagli</button>
        </div>
      `;

      marker.addListener('click', () => {
        this.zone.run(() => {
          this.infoWindow.setContent(contentString);
          this.infoWindow.open(this.map, marker);
          setTimeout(() => {
            const btn = document.getElementById(`dettagli-btn-${seed.id}`);
            if (btn) {
              btn.onclick = (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.zone.run(() => {
                  this.router.navigate(['/dettagli-semi', seed.id]);
                });
                return false;
              };
            }
          }, 0);
        });
      });
    });
  }
}