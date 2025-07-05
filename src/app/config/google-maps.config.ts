export const GoogleMapsConfig = {
  // This is a demo API key for testing - replace with your own
  // To get your own API key:
  // 1. Go to https://console.cloud.google.com/
  // 2. Create a new project or select existing
  // 3. Enable Google Maps JavaScript API
  // 4. Create credentials (API Key)
  // 5. Restrict the key to your domain for security
  apiKey: 'AIzaSyAdxaQHXx7DHkTRBdR3ejYwb55KUY_LGAM',
  
  // Working demo key from Google's official documentation  
  demoApiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
  
  // Default map configuration
  defaultMapOptions: {
    version: 'weekly' as const,
    libraries: ['places', 'geometry'] as ('places' | 'geometry')[],
    language: 'it', // Italian language
    region: 'IT'    // Italy region
  },
  
  // Default map center (Umbria, Italy)
  defaultCenter: {
    lat: 42.9,
    lng: 12.5
  },
  
  // Default zoom level
  defaultZoom: 8
};

export const isValidApiKey = (apiKey: string): boolean => {
  return !!(apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE');
}; 