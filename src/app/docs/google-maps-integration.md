# Google Maps Integration in TypeScript

This documentation explains how to use the Google Maps libraries and frameworks that have been installed in your Ionic/Angular TypeScript project.

## Installed Packages

### 1. Core Google Maps Packages
- **@googlemaps/js-api-loader**: Official Google Maps JavaScript API loader
- **@angular/google-maps**: Angular wrapper for Google Maps
- **@googlemaps/markerclusterer**: Marker clustering functionality

### 2. TypeScript Definitions
- **@types/google.maps**: TypeScript definitions for Google Maps API
- **@types/googlemaps**: Additional TypeScript definitions

## Configuration

### TypeScript Configuration
Your `tsconfig.json` already includes Google Maps types:
```json
{
  "compilerOptions": {
    "types": ["google.maps"]
  }
}
```

### Google Maps API Key
The API key is already configured in your `index.html`:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initGoogleMaps&libraries=geometry"></script>
```

## Usage Examples

### 1. Using the Google Maps Service

```typescript
import { GoogleMapsService } from './services/google-maps.service';

constructor(private googleMapsService: GoogleMapsService) {}

async ngOnInit() {
  // Load a map
  const map = await this.googleMapsService.loadMap('map-element-id');
  
  // Add a marker
  const marker = this.googleMapsService.addMarker(map, {
    lat: 43.1,
    lng: 12.4
  }, 'My Location');
  
  // Get current location
  const location = await this.googleMapsService.getCurrentLocation();
  
  // Calculate distance
  const distance = this.googleMapsService.calculateDistance(
    { lat: 43.1, lng: 12.4 },
    { lat: 43.2, lng: 12.5 }
  );
}
```

### 2. Using Angular Google Maps Component

```typescript
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  imports: [GoogleMapsModule],
  template: `
    <google-map
      [center]="center"
      [zoom]="zoom"
      width="100%"
      height="400px">
      
      <map-marker
        *ngFor="let marker of markers"
        [position]="marker.position"
        [title]="marker.title">
      </map-marker>
    </google-map>
  `
})
export class MyMapComponent {
  center = { lat: 43.1, lng: 12.4 };
  zoom = 10;
  markers = [
    { position: { lat: 43.1, lng: 12.4 }, title: 'Marker 1' }
  ];
}
```

### 3. Using TypeScript Interfaces

```typescript
import { MapConfig, MarkerData } from './interfaces/google-maps.interface';

const mapConfig: MapConfig = {
  center: { lat: 43.1, lng: 12.4 },
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

const markers: MarkerData[] = [
  {
    position: { lat: 43.1, lng: 12.4 },
    title: 'Location 1',
    description: 'This is location 1',
    category: 'restaurant'
  }
];
```

## Key Features

### 1. Map Loading
- Async map loading with proper error handling
- Configurable map options (center, zoom, type, etc.)
- Support for multiple map instances

### 2. Marker Management
- Add single or multiple markers
- Custom marker icons and animations
- Marker clustering for better performance
- Info windows for detailed information

### 3. Geolocation
- Get current user location
- Handle location permissions
- Distance calculations between points

### 4. TypeScript Support
- Full type safety with interfaces
- IntelliSense support in IDE
- Compile-time error checking
- Predefined enums for common values

## Advanced Features

### 1. Custom Map Styles
```typescript
const mapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#e9e9e9' }]
  }
];
```

### 2. Directions Service
```typescript
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

directionsService.route({
  origin: { lat: 43.1, lng: 12.4 },
  destination: { lat: 43.2, lng: 12.5 },
  travelMode: google.maps.TravelMode.DRIVING
}, (result, status) => {
  if (status === 'OK') {
    directionsRenderer.setDirections(result);
  }
});
```

### 3. Places Service
```typescript
const placesService = new google.maps.places.PlacesService(map);

placesService.findPlaceFromQuery({
  query: 'restaurants in Perugia',
  fields: ['name', 'geometry']
}, (results, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    // Handle results
  }
});
```

## Best Practices

### 1. Error Handling
Always wrap Google Maps API calls in try-catch blocks:
```typescript
try {
  const map = await this.googleMapsService.loadMap('map-id');
} catch (error) {
  console.error('Failed to load map:', error);
}
```

### 2. Memory Management
Clean up map instances and event listeners:
```typescript
ngOnDestroy() {
  // Remove event listeners
  // Clear markers
  // Dispose of map instance
}
```

### 3. Performance
- Use marker clustering for large datasets
- Implement lazy loading for maps
- Optimize map styles and options

## Examples in Your Project

Check these files for complete implementation examples:
- `src/app/services/google-maps.service.ts` - Service implementation
- `src/app/components/google-map-example/google-map-example.component.ts` - Component example
- `src/app/interfaces/google-maps.interface.ts` - TypeScript interfaces

## Next Steps

1. Update your Google Maps API key in `index.html`
2. Add the Google Maps example component to your routes
3. Customize the map styling and functionality for your needs
4. Implement additional Google Maps features as required

## Resources

- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript)
- [Angular Google Maps Documentation](https://github.com/angular/components/tree/main/src/google-maps)
- [Google Maps TypeScript Definitions](https://www.npmjs.com/package/@types/google.maps) 