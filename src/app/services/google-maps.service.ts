import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private loader: Loader;
  private mapOptions: google.maps.MapOptions = {
    center: { lat: 43.1, lng: 12.4 }, // Centered on Umbria, Italy
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  constructor() {
    this.loader = new Loader({
      apiKey: 'AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgkGKGGGKGk', // Your existing API key
      version: 'weekly',
      libraries: ['geometry', 'places']
    });
  }

  /**
   * Load Google Maps API and create a map instance
   */
  async loadMap(elementId: string): Promise<google.maps.Map> {
    try {
      const google = await this.loader.load();
      const mapElement = document.getElementById(elementId);
      
      if (!mapElement) {
        throw new Error(`Element with id '${elementId}' not found`);
      }

      const map = new google.maps.Map(mapElement, this.mapOptions);
      return map;
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      throw error;
    }
  }

  /**
   * Add a marker to the map
   */
  addMarker(map: google.maps.Map, position: google.maps.LatLngLiteral, title?: string): google.maps.Marker {
    const marker = new google.maps.Marker({
      position,
      map,
      title: title || 'Marker'
    });
    return marker;
  }

  /**
   * Add multiple markers to the map
   */
  addMarkers(map: google.maps.Map, positions: { lat: number, lng: number, title?: string }[]): google.maps.Marker[] {
    const markers: google.maps.Marker[] = [];
    
    positions.forEach(pos => {
      const marker = this.addMarker(map, { lat: pos.lat, lng: pos.lng }, pos.title);
      markers.push(marker);
    });
    
    return markers;
  }

  /**
   * Create an info window
   */
  createInfoWindow(content: string): google.maps.InfoWindow {
    return new google.maps.InfoWindow({
      content
    });
  }

  /**
   * Calculate distance between two points
   */
  calculateDistance(point1: google.maps.LatLngLiteral, point2: google.maps.LatLngLiteral): number {
    const lat1 = point1.lat;
    const lng1 = point1.lng;
    const lat2 = point2.lat;
    const lng2 = point2.lng;

    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLng = this.toRadians(lng2 - lng1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  /**
   * Get current location
   */
  getCurrentLocation(): Promise<google.maps.LatLngLiteral> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    });
  }
} 