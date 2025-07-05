// src/app/semi/mappa-semi/mappa-semi.page.ts

import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

// Use direct config instead of import to avoid module issues
const GoogleMapsConfig = {
  apiKey: 'AIzaSyAdxaQHXx7DHkTRBdR3ejYwb55KUY_LGAM',
  demoApiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
  defaultMapOptions: {
    version: 'weekly' as const,
    libraries: ['places', 'geometry'] as ('places' | 'geometry')[],
    language: 'it',
    region: 'IT'
  },
  defaultCenter: { lat: 42.9, lng: 12.5 },
  defaultZoom: 8
};

const isValidApiKey = (apiKey: string): boolean => {
  return !!(apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE');
};
import { Farmer } from '../../interfaces/farmer.interface';
import { CURRENT_USER_FARMER } from '../../data/farmers.data';

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
  markerType: 'farmer' | 'seed';
}

@Component({
  selector: 'app-mappa-semi',
  templateUrl: './mappa-semi.page.html',
  styleUrls: ['./mappa-semi.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule, FormsModule]
})
export class MappaSemiPage implements OnInit, AfterViewInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map: google.maps.Map | null = null;
  infoWindow: google.maps.InfoWindow | null = null;
  private isMapReady = false;
  private loader: Loader;

  variedades: Semilla[] = [
    { id: 'cavolo-di-costacciaro', name: 'Cavolo di Costacciaro', type: 'Cavolo', shortDescription: 'Varietà antica delle zone montuose.', longDescription: 'Il Cavolo di Costacciaro è una varietà antica, coltivata tradizionalmente nelle zone montuose dell\'Umbria.', origin: 'Costacciaro, Umbria', imageUrl: 'assets/cavolo-di-costacciaro.jpg', lat: 43.374, lng: 12.713, markerType: 'farmer' },
    { id: 'cima-di-rapa', name: 'Cima di rapa', type: 'Cima di rapa', shortDescription: 'Ortaggio tipico umbro.', longDescription: 'La Cima di rapa è un ortaggio tipico della cucina umbra.', origin: 'Terni, Umbria', imageUrl: 'assets/cima-di-rapa.jpg', lat: 42.563, lng: 12.642, markerType: 'seed' },
    { id: 'cocomero-nero', name: 'Cocomero nero', type: 'Cocomero', shortDescription: 'Varietà di anguria locale.', longDescription: 'Il Cocomero Nero è una varietà di anguria coltivata in Umbria.', origin: 'Marsciano, Umbria', imageUrl: 'assets/cocomero-nero.jpg', lat: 42.913, lng: 12.340, markerType: 'farmer' },
    { id: 'fagiolina-del-trasimeno', name: 'Fagiolina del Trasimeno', type: 'Legume', shortDescription: 'Legume antico e pregiato.', longDescription: 'La Fagiolina del Trasimeno è un legume antico e pregiato.', origin: 'Lago Trasimeno, Umbria', imageUrl: 'assets/fagiolina-del-trasimeno.jpg', lat: 43.128, lng: 12.127, markerType: 'seed' },
    { id: 'fagiolino-verde-nano', name: 'Fagiolino verde nano', type: 'Legume', shortDescription: 'Varietà di fagiolino umbro.', longDescription: 'Il Fagiolino verde nano è una varietà di fagiolino tipica di Foligno.', origin: 'Foligno, Umbria', imageUrl: 'assets/fagiolino-verde-nano.jpg', lat: 42.954, lng: 12.701, markerType: 'farmer' },
    { id: 'cipolla-gialla', name: 'Cipolla gialla', type: 'Ortaggio', shortDescription: 'Cipolla tipica di Cannara.', longDescription: 'La Cipolla Gialla è una varietà molto diffusa a Cannara.', origin: 'Cannara, Umbria', imageUrl: 'assets/cipolla-gialla.jpg', lat: 43.022, lng: 12.553, markerType: 'seed' },
    { id: 'erba-medica', name: 'Erba medica', type: 'Foraggera', shortDescription: 'Pianta foraggera diffusa in Valnerina.', longDescription: 'L\'Erba Medica è una pianta foraggera tipica della Valnerina.', origin: 'Valnerina, Umbria', imageUrl: 'assets/erba-medica.jpg', lat: 42.721, lng: 12.888, markerType: 'farmer' },
    { id: 'insalata-spadona-rossa', name: 'Insalata spadona rossa', type: 'Ortaggio', shortDescription: 'Varietà di lattuga umbra.', longDescription: 'L\'Insalata Spadona Rossa è una varietà di lattuga tipica di Perugia.', origin: 'Perugia, Umbria', imageUrl: 'assets/insalata-spadona-rossa.jpg', lat: 43.112, lng: 12.388, markerType: 'seed' },
    { id: 'lupinella', name: 'Lupinella', type: 'Foraggera', shortDescription: 'Pianta foraggera di Montefalco.', longDescription: 'La Lupinella è una pianta foraggera tipica di Montefalco.', origin: 'Montefalco, Umbria', imageUrl: 'assets/lupinella.jpg', lat: 42.892, lng: 12.646, markerType: 'farmer' },
    { id: 'quarantino-giallo', name: 'Quarantino giallo', type: 'Cereale', shortDescription: 'Mais autoctono di Gubbio.', longDescription: 'Il Quarantino Giallo è una varietà di mais autoctona di Gubbio.', origin: 'Gubbio, Umbria', imageUrl: 'assets/quarantino-giallo.jpg', lat: 43.351, lng: 12.573, markerType: 'seed' },
    { id: 'quarantino-rosso', name: 'Quarantino rosso', type: 'Cereale', shortDescription: 'Mais rosso di Spoleto.', longDescription: 'Il Quarantino Rosso è una varietà di mais tipica di Spoleto.', origin: 'Spoleto, Umbria', imageUrl: 'assets/quarantino-rosso.jpg', lat: 42.740, lng: 12.738, markerType: 'farmer' },
    { id: 'rapi-del-trasimeno', name: 'Rapi del Trasimeno', type: 'Ortaggio', shortDescription: 'Broccoletti tipici del Trasimeno.', longDescription: 'I Rapi del Trasimeno sono una varietà di broccoletti tipici.', origin: 'Passignano sul Trasimeno, Umbria', imageUrl: 'assets/rapi-del-trasimeno.jpg', lat: 43.188, lng: 12.140, markerType: 'seed' },
    { id: 'sedano-sellerino', name: 'Sedano sellerino', type: 'Ortaggio', shortDescription: 'Sedano di Trevi.', longDescription: 'Il Sedano Sellerino è una varietà di sedano tipica di Trevi.', origin: 'Trevi, Umbria', imageUrl: 'assets/sedano-sellerino.jpg', lat: 42.879, lng: 12.743, markerType: 'farmer' },
    { id: 'fagiolo-grigio', name: 'Fagiolo grigio', type: 'Legume', shortDescription: 'Fagiolo tipico di Bevagna.', longDescription: 'Un tipo di fagiolo grigio tipico di Bevagna.', origin: 'Bevagna, Umbria', imageUrl: 'assets/fagiolo-grigio.jpg', lat: 42.936, lng: 12.606, markerType: 'seed' },
    { id: 'fagiolo-mezza-rama', name: 'Fagiolo mezza rama', type: 'Legume', shortDescription: 'Fagiolo di Deruta.', longDescription: 'Un tipo di fagiolo di media rama tipico di Deruta.', origin: 'Deruta, Umbria', imageUrl: 'assets/fagiolo-mezza-rama.jpg', lat: 42.987, lng: 12.418, markerType: 'farmer' },
    { id: 'fagiolo-s-pietro', name: 'Fagiolo S.Pietro', type: 'Legume', shortDescription: 'Fagiolo di San Pietro.', longDescription: 'Un tipo di fagiolo S. Pietro tipico di Perugia.', origin: 'San Pietro, Perugia', imageUrl: 'assets/fagiolo-s-pietro.jpg', lat: 43.104, lng: 12.389, markerType: 'seed' },
    { id: 'fave', name: 'Fave', type: 'Legume', shortDescription: 'Fave di Orvieto.', longDescription: 'Le fave sono un legume tipico di Orvieto.', origin: 'Orvieto, Umbria', imageUrl: 'assets/fave.jpg', lat: 42.718, lng: 12.111, markerType: 'farmer' },
    { id: 'favino', name: 'Favino', type: 'Foraggera', shortDescription: 'Favino di Amelia.', longDescription: 'Il favino è una pianta foraggera tipica di Amelia.', origin: 'Amelia, Umbria', imageUrl: 'assets/favino.jpg', lat: 42.557, lng: 12.415, markerType: 'seed' },
    { id: 'melanzana', name: 'Melanzana', type: 'Ortaggio', shortDescription: 'Melanzana di Bastia Umbra.', longDescription: 'La melanzana è un ortaggio tipico di Bastia Umbra.', origin: 'Bastia Umbra, Umbria', imageUrl: 'assets/melanzana.jpg', lat: 43.065, lng: 12.543, markerType: 'farmer' },
    { id: 'pomodoro-a-grappolo', name: 'Pomodoro a grappolo', type: 'Ortaggio', shortDescription: 'Pomodoro di Assisi.', longDescription: 'Il pomodoro a grappolo è tipico di Assisi.', origin: 'Assisi, Umbria', imageUrl: 'assets/pomodoro-a-grappolo.jpg', lat: 43.070, lng: 12.617, markerType: 'seed' },
    { id: 'pomodoro-da-appendere', name: 'Pomodoro da appendere', type: 'Ortaggio', shortDescription: 'Pomodoro di Spello.', longDescription: 'Il pomodoro da appendere è tipico di Spello.', origin: 'Spello, Umbria', imageUrl: 'assets/pomodoro-da-appendere.jpg', lat: 42.989, lng: 12.670, markerType: 'farmer' },
    { id: 'pomodoro-da-conserva', name: 'Pomodoro da conserva', type: 'Ortaggio', shortDescription: 'Pomodoro di Montefalco.', longDescription: 'Il pomodoro da conserva è tipico di Montefalco.', origin: 'Montefalco, Umbria', imageUrl: 'assets/pomodoro-da-conserva.jpg', lat: 42.894, lng: 12.651, markerType: 'seed' },
    { id: 'pomodoro-francescano', name: 'Pomodoro francescano', type: 'Ortaggio', shortDescription: 'Pomodoro di Assisi.', longDescription: 'Il pomodoro francescano è tipico di Assisi.', origin: 'Assisi, Umbria', imageUrl: 'assets/pomodoro-francescano.jpg', lat: 43.070, lng: 12.617, markerType: 'farmer' },
    { id: 'pomodoro-san-marzano', name: 'Pomodoro San Marzano', type: 'Ortaggio', shortDescription: 'Pomodoro di Spoleto.', longDescription: 'Il pomodoro San Marzano è coltivato anche a Spoleto.', origin: 'Spoleto, Umbria', imageUrl: 'assets/pomodoro-san-marzano.jpg', lat: 42.740, lng: 12.738, markerType: 'seed' },
    { id: 'pomodoro-tondo-grande', name: 'Pomodoro tondo grande', type: 'Ortaggio', shortDescription: 'Pomodoro di Todi.', longDescription: 'Il pomodoro tondo grande è tipico di Todi.', origin: 'Todi, Umbria', imageUrl: 'assets/pomodoro-tondo-grande.jpg', lat: 42.780, lng: 12.409, markerType: 'farmer' },
    { id: 'zucca-a-fiasco', name: 'Zucca a fiasco', type: 'Ortaggio', shortDescription: 'Zucca di Castiglione del Lago.', longDescription: 'La zucca a fiasco è tipica di Castiglione del Lago.', origin: 'Castiglione del Lago, Umbria', imageUrl: 'assets/zucca-a-fiasco.jpg', lat: 43.126, lng: 12.045, markerType: 'seed' },
    { id: 'zucca-da-maiali', name: 'Zucca da maiali', type: 'Ortaggio', shortDescription: 'Zucca di Città di Castello.', longDescription: 'La zucca da maiali è tipica di Città di Castello.', origin: 'Città di Castello, Umbria', imageUrl: 'assets/zucca-da-maiali.jpg', lat: 43.465, lng: 12.241, markerType: 'farmer' },
    { id: 'zucca-dolce', name: 'Zucca dolce', type: 'Ortaggio', shortDescription: 'Zucca di Gualdo Tadino.', longDescription: 'La zucca dolce è tipica di Gualdo Tadino.', origin: 'Gualdo Tadino, Umbria', imageUrl: 'assets/zucca-dolce.jpg', lat: 43.233, lng: 12.782, markerType: 'seed' },
  ];
  
  private filterType: string | null = null;
  public currentFarmer: Farmer = CURRENT_USER_FARMER;

  constructor(private route: ActivatedRoute, private router: Router, private zone: NgZone) { 
    // Initialize Google Maps API Loader
    const apiKey = isValidApiKey(GoogleMapsConfig.apiKey) 
      ? GoogleMapsConfig.apiKey 
      : GoogleMapsConfig.demoApiKey;
    
    this.loader = new Loader({
      apiKey: apiKey,
      version: GoogleMapsConfig.defaultMapOptions.version,
      libraries: GoogleMapsConfig.defaultMapOptions.libraries,
      language: GoogleMapsConfig.defaultMapOptions.language,
      region: GoogleMapsConfig.defaultMapOptions.region
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filterType = params['filterType'] || null;
      console.log('Filter type:', this.filterType);
    });
  }

  ngAfterViewInit() {
    this.loadGoogleMaps();
  }

  private async loadGoogleMaps() {
    try {
      await this.loader.load();
      console.log('Google Maps loaded successfully');
      this.loadMap(this.filterType);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      this.showMapError((error as Error).message);
    }
  }

  private showMapError(errorMessage?: string) {
    const mapContainer = this.mapElement?.nativeElement;
    if (mapContainer) {
      const defaultMessage = 'Problemi di connessione o API key non valida';
      const message = errorMessage || defaultMessage;
      
      mapContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #f0f0f0; color: #666; text-align: center; padding: 20px;">
          <div style="font-size: 2rem; margin-bottom: 1rem;">🗺️</div>
          <h3 style="margin: 0 0 0.5rem 0;">Mappa non disponibile</h3>
          <p style="margin: 0; font-size: 0.9rem;">${message}</p>
          <p style="margin: 10px 0 0 0; font-size: 0.8rem; color: #999;">
            Per ottenere una chiave API Google Maps valida, visita:<br>
            <a href="https://console.cloud.google.com/" target="_blank" style="color: #007cba;">console.cloud.google.com</a>
          </p>
        </div>
      `;
    }
  }

  goToMap() {
    this.router.navigate(['/mappa-semi']);
  }

  goToList() {
    this.router.navigate(['/lista-semi']);
  }

  goToRecipes() {
    this.router.navigate(['/ricette']);
  }

  goToArpa() {
    this.router.navigate(['/home']);
  }

  async loadMap(filterType?: string | null) {
    if (!this.mapElement?.nativeElement) {
      console.error('Map element is not available');
      return;
    }

    // Center on Umbria region, Italy
    const umbriaCenter = GoogleMapsConfig.defaultCenter;

    const mapOptions: google.maps.MapOptions = {
      center: umbriaCenter,
      zoom: GoogleMapsConfig.defaultZoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      gestureHandling: 'greedy',
      styles: [
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#c9b2a6' }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#dcd2be' }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ae9e90' }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#93817c' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{ color: '#a5b076' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#f5f1e6' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#fdfcf8' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#f8c967' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#e9bc62' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{ color: '#e98d58' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#db8555' }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#806b63' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#8f7d77' }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#ebe3cd' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{ color: '#dfd2ae' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#b9d3c2' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#92998d' }]
        }
      ]
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.infoWindow = new google.maps.InfoWindow();

    let seedsToDisplay = filterType 
      ? this.variedades.filter(seed => seed.type === filterType)
      : this.variedades;

    if (seedsToDisplay.length > 0) {
      this.addMarkers(seedsToDisplay);
    }

    this.isMapReady = true;
    console.log('Map initialized with', seedsToDisplay.length, 'markers');
  }

  private addMarkers(seeds: Semilla[]) {
    if (!this.map || !this.infoWindow) {
      console.error('Map or InfoWindow not initialized');
      return;
    }

    console.log('Adding markers for seeds:', seeds.length);
    seeds.forEach((seed, index) => {
      console.log(`Creating marker ${index + 1}/${seeds.length}:`, seed.name, 'Type:', seed.markerType);
      const markerIcon = this.getMarkerIcon(seed.markerType);
      
      const marker = new google.maps.Marker({
        position: { lat: seed.lat, lng: seed.lng },
        map: this.map,
        title: seed.name,
        icon: markerIcon,
        animation: google.maps.Animation.DROP
      });
      console.log('Marker created successfully:', marker);

      const contentString = `
        <div style="max-width: 280px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 8px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
            <img src="${seed.imageUrl}" alt="${seed.name}" 
                 style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; border: 3px solid #e8d49a;" 
                 onerror="this.style.display='none'" />
            <div>
              <h3 style="margin: 0 0 4px 0; font-size: 1.1em; color: #4a5c3a; font-weight: 600;">${seed.name}</h3>
              <span style="background: #4a5c3a; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.85em;">${seed.type}</span>
            </div>
          </div>
          <p style="margin: 8px 0; font-size: 0.95em; line-height: 1.4; color: #666;">${seed.shortDescription}</p>
          <p style="margin: 4px 0 10px 0; font-size: 0.9em; color: #888;"><strong>Origine:</strong> ${seed.origin}</p>
          <button id="dettagli-btn-${seed.id}" 
                  style="background: #4a5c3a; color: white; border: none; border-radius: 6px; padding: 8px 16px; 
                         font-size: 0.9em; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
                  onmouseover="this.style.background='#3a4a2a'" 
                  onmouseout="this.style.background='#4a5c3a'">
            Vedi dettagli
          </button>
        </div>
      `;

      marker.addListener('click', () => {
        this.zone.run(() => {
          if (this.infoWindow && this.map) {
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
                };
              }
            }, 100);
          }
        });
      });
    });
  }

  private getMarkerIcon(markerType: 'farmer' | 'seed') {
    const size = new google.maps.Size(32, 45);
    const anchor = new google.maps.Point(16, 45);
    
    if (markerType === 'farmer') {
      return {
        url: 'assets/marker-farmer.png',
        scaledSize: size,
        anchor: anchor
      };
    } else {
      return {
        url: 'assets/marker-seed.png',
        scaledSize: size,
        anchor: anchor
      };
    }
  }
}