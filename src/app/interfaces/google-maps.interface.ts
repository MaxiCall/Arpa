/**
 * Google Maps TypeScript Interfaces
 * These interfaces provide type safety for Google Maps integration
 */

export interface MapConfig {
  center: google.maps.LatLngLiteral;
  zoom: number;
  mapTypeId?: google.maps.MapTypeId;
  styles?: google.maps.MapTypeStyle[];
  disableDefaultUI?: boolean;
  zoomControl?: boolean;
  streetViewControl?: boolean;
  fullscreenControl?: boolean;
}

export interface MarkerConfig {
  position: google.maps.LatLngLiteral;
  title?: string;
  icon?: string | google.maps.Icon | google.maps.Symbol;
  animation?: google.maps.Animation;
  clickable?: boolean;
  draggable?: boolean;
}

export interface MarkerData extends MarkerConfig {
  id?: string;
  description?: string;
  category?: string;
  data?: any;
}

export interface InfoWindowConfig {
  content: string | HTMLElement;
  position?: google.maps.LatLngLiteral;
  pixelOffset?: google.maps.Size;
  maxWidth?: number;
  disableAutoPan?: boolean;
}

export interface GeolocationPosition {
  lat: number;
  lng: number;
  accuracy?: number;
  altitude?: number;
  heading?: number;
  speed?: number;
  timestamp?: number;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface DirectionsRequest {
  origin: google.maps.LatLngLiteral | string;
  destination: google.maps.LatLngLiteral | string;
  travelMode: google.maps.TravelMode;
  waypoints?: google.maps.DirectionsWaypoint[];
  optimizeWaypoints?: boolean;
  provideRouteAlternatives?: boolean;
  avoidHighways?: boolean;
  avoidTolls?: boolean;
  avoidFerries?: boolean;
}

export interface PlaceSearchRequest {
  query: string;
  location?: google.maps.LatLngLiteral;
  radius?: number;
  type?: string;
  language?: string;
  region?: string;
}

export interface MapClusterConfig {
  markers: MarkerData[];
  options?: {
    gridSize?: number;
    maxZoom?: number;
    minimumClusterSize?: number;
    styles?: any[];
  };
}

export interface MapEvent {
  type: string;
  latLng?: google.maps.LatLngLiteral;
  pixel?: google.maps.Point;
  data?: any;
}

export interface MapServiceConfig {
  apiKey: string;
  version?: string;
  libraries?: string[];
  language?: string;
  region?: string;
}

/**
 * Map Style Presets
 */
export enum MapStylePreset {
  STANDARD = 'standard',
  SATELLITE = 'satellite',
  HYBRID = 'hybrid',
  TERRAIN = 'terrain',
  DARK = 'dark',
  RETRO = 'retro',
  SILVER = 'silver',
  NIGHT = 'night'
}

/**
 * Marker Icon Types
 */
export enum MarkerIconType {
  DEFAULT = 'default',
  CUSTOM = 'custom',
  SYMBOL = 'symbol',
  SVG = 'svg'
}

/**
 * Map Interaction Types
 */
export enum MapInteractionType {
  CLICK = 'click',
  DOUBLE_CLICK = 'dblclick',
  RIGHT_CLICK = 'rightclick',
  MOUSE_OVER = 'mouseover',
  MOUSE_OUT = 'mouseout',
  DRAG_START = 'dragstart',
  DRAG = 'drag',
  DRAG_END = 'dragend',
  ZOOM_CHANGED = 'zoom_changed',
  CENTER_CHANGED = 'center_changed',
  BOUNDS_CHANGED = 'bounds_changed'
}

/**
 * Common Map Utility Types
 */
export type LatLng = google.maps.LatLngLiteral;
export type MapInstance = google.maps.Map;
export type MarkerInstance = google.maps.Marker;
export type InfoWindowInstance = google.maps.InfoWindow;

/**
 * Map Component Props Interface
 */
export interface MapComponentProps {
  config: MapConfig;
  markers?: MarkerData[];
  showInfoWindow?: boolean;
  enableGeolocation?: boolean;
  enableClustering?: boolean;
  onMapReady?: (map: MapInstance) => void;
  onMarkerClick?: (marker: MarkerData, markerInstance: MarkerInstance) => void;
  onMapClick?: (event: MapEvent) => void;
  onBoundsChanged?: (bounds: MapBounds) => void;
}

/**
 * Map Service Interface
 */
export interface IMapService {
  loadMap(elementId: string, config?: MapConfig): Promise<MapInstance>;
  addMarker(map: MapInstance, config: MarkerConfig): MarkerInstance;
  addMarkers(map: MapInstance, markers: MarkerData[]): MarkerInstance[];
  removeMarker(marker: MarkerInstance): void;
  removeAllMarkers(): void;
  createInfoWindow(config: InfoWindowConfig): InfoWindowInstance;
  getCurrentLocation(): Promise<GeolocationPosition>;
  calculateDistance(point1: LatLng, point2: LatLng): number;
  fitBounds(map: MapInstance, bounds: LatLng[]): void;
  geocodeAddress(address: string): Promise<LatLng>;
  reverseGeocode(latLng: LatLng): Promise<string>;
} 