export interface Farmer {
  id: string;
  name: string;
  status: string;
  phone: string;
  email: string;
  imageUrl: string;
  location: string;
  specialties: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
} 