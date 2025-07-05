import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsService } from '../../services/google-maps.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google-map-example',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  template: `
    <div class="map-container">
      <h2>Google Maps Example</h2>
      
      <!-- Using Angular Google Maps Component -->
      <div class="angular-map-section">
        <h3>Angular Google Maps Component</h3>
        <google-map
          #angularMap
          [center]="center"
          [zoom]="zoom"
          [options]="mapOptions"
          width="100%"
          height="300px">
          
          <!-- Markers -->
          <map-marker
            *ngFor="let marker of markers"
            [position]="marker.position"
            [title]="marker.title"
            (mapClick)="onMarkerClick(marker)">
          </map-marker>
          
          <!-- Info Window -->
          <map-info-window>
            <div>
              <h4>{{ selectedMarker?.title }}</h4>
              <p>{{ selectedMarker?.description }}</p>
            </div>
          </map-info-window>
        </google-map>
      </div>
      
      <!-- Using Google Maps Service -->
      <div class="service-map-section">
        <h3>Google Maps Service</h3>
        <div id="service-map" style="width: 100%; height: 300px;"></div>
        <div class="map-controls">
          <button (click)="getCurrentLocation()">Get Current Location</button>
          <button (click)="addRandomMarker()">Add Random Marker</button>
          <button (click)="calculateDistanceExample()">Calculate Distance</button>
        </div>
      </div>
      
      <!-- Results Display -->
      <div class="results" *ngIf="results.length > 0">
        <h3>Results</h3>
        <ul>
          <li *ngFor="let result of results">{{ result }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .map-container {
      padding: 20px;
    }
    
    .angular-map-section,
    .service-map-section {
      margin-bottom: 30px;
    }
    
    .map-controls {
      margin-top: 10px;
    }
    
    .map-controls button {
      margin-right: 10px;
      padding: 8px 16px;
      background: #007cba;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .map-controls button:hover {
      background: #005a8b;
    }
    
    .results {
      margin-top: 20px;
      padding: 15px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    
    .results ul {
      list-style-type: none;
      padding: 0;
    }
    
    .results li {
      margin: 5px 0;
      padding: 5px 10px;
      background: white;
      border-radius: 2px;
    }
  `]
})
export class GoogleMapExampleComponent implements OnInit {
  @ViewChild('angularMap') angularMap!: GoogleMap;
  
  // Angular Google Maps properties
  center: google.maps.LatLngLiteral = { lat: 43.1, lng: 12.4 }; // Umbria, Italy
  zoom = 8;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  markers = [
    {
      position: { lat: 43.1122, lng: 12.3888 },
      title: 'Perugia',
      description: 'Capital of Umbria region'
    },
    {
      position: { lat: 42.9583, lng: 12.1097 },
      title: 'Orvieto',
      description: 'Historic hill town'
    },
    {
      position: { lat: 43.0642, lng: 12.6089 },
      title: 'Assisi',
      description: 'Birthplace of St. Francis'
    }
  ];
  
  selectedMarker: any = null;
  results: string[] = [];
  
  // Google Maps Service properties
  private serviceMap: google.maps.Map | null = null;
  private serviceMarkers: google.maps.Marker[] = [];
  
  constructor(private googleMapsService: GoogleMapsService) {}
  
  async ngOnInit() {
    try {
      // Initialize service map
      this.serviceMap = await this.googleMapsService.loadMap('service-map');
      
      // Add some markers to the service map
      const initialMarkers = [
        { lat: 43.1122, lng: 12.3888, title: 'Perugia' },
        { lat: 42.9583, lng: 12.1097, title: 'Orvieto' },
        { lat: 43.0642, lng: 12.6089, title: 'Assisi' }
      ];
      
      this.serviceMarkers = this.googleMapsService.addMarkers(this.serviceMap, initialMarkers);
      
      this.results.push('Google Maps Service initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Maps Service:', error);
      this.results.push('Error initializing Google Maps Service');
    }
  }
  
  // Angular Google Maps methods
  onMarkerClick(marker: any) {
    this.selectedMarker = marker;
    console.log('Marker clicked:', marker);
  }
  
  // Google Maps Service methods
  async getCurrentLocation() {
    try {
      const location = await this.googleMapsService.getCurrentLocation();
      this.results.push(`Current location: ${location.lat}, ${location.lng}`);
      
      if (this.serviceMap) {
        this.serviceMap.setCenter(location);
        this.serviceMap.setZoom(15);
        
        const marker = this.googleMapsService.addMarker(
          this.serviceMap,
          location,
          'Current Location'
        );
        this.serviceMarkers.push(marker);
      }
    } catch (error) {
      console.error('Error getting current location:', error);
      this.results.push('Error getting current location');
    }
  }
  
  addRandomMarker() {
    if (!this.serviceMap) return;
    
    const randomLat = 43.1 + (Math.random() - 0.5) * 0.5;
    const randomLng = 12.4 + (Math.random() - 0.5) * 0.5;
    
    const marker = this.googleMapsService.addMarker(
      this.serviceMap,
      { lat: randomLat, lng: randomLng },
      `Random Marker ${this.serviceMarkers.length + 1}`
    );
    
    this.serviceMarkers.push(marker);
    this.results.push(`Added random marker at: ${randomLat.toFixed(4)}, ${randomLng.toFixed(4)}`);
  }
  
  calculateDistanceExample() {
    if (this.serviceMarkers.length < 2) {
      this.results.push('Need at least 2 markers to calculate distance');
      return;
    }
    
    const marker1 = this.serviceMarkers[0];
    const marker2 = this.serviceMarkers[1];
    
    const pos1 = marker1.getPosition();
    const pos2 = marker2.getPosition();
    
    if (pos1 && pos2) {
      const distance = this.googleMapsService.calculateDistance(
        { lat: pos1.lat(), lng: pos1.lng() },
        { lat: pos2.lat(), lng: pos2.lng() }
      );
      
      this.results.push(`Distance between first two markers: ${distance.toFixed(2)} km`);
    }
  }
} 