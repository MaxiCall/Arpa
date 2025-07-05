import { Farmer } from '../interfaces/farmer.interface';

export const FARMERS_DATA: Farmer[] = [
  {
    id: 'farmer-1',
    name: 'Antonietta',
    status: 'Contadina',
    phone: '+39 075 123 4567',
    email: 'antoniettaUmbria@gmail.com',
    imageUrl: 'assets/farmer-1.png',
    location: 'Perugia, Umbria',
    specialties: ['Pomodori', 'Fagioli', 'Erbe aromatiche'],
    description: 'Coltivo da 40 anni nelle colline di Perugia. Specializzata in varietà antiche di pomodori.',
    coordinates: {
      lat: 43.112,
      lng: 12.388
    }
  },
  {
    id: 'farmer-2',
    name: 'Giuseppe',
    status: 'Contadina',
    phone: '+39 075 234 5678',
    email: 'giuseppe@agricoltura.it',
    imageUrl: 'assets/farmer-2.png',
    location: 'Spoleto, Umbria',
    specialties: ['Cereali', 'Legumi', 'Zucche'],
    description: 'Eredità familiare di 3 generazioni. Coltivo il quarantino e varietà antiche di legumi.',
    coordinates: {
      lat: 42.740,
      lng: 12.738
    }
  },
  {
    id: 'farmer-3',
    name: 'Maria',
    status: 'Contadina',
    phone: '+39 075 345 6789',
    email: 'maria@agricoltura.it',
    imageUrl: 'assets/farmer-3.png',
    location: 'Assisi, Umbria',
    specialties: ['Verdure a foglia', 'Cipolle', 'Insalate'],
    description: 'Coltivatrice biologica da 25 anni. Specializzata in verdure a foglia e cipolle di Cannara.',
    coordinates: {
      lat: 43.070,
      lng: 12.617
    }
  },
  {
    id: 'farmer-4',
    name: 'Roberto',
    status: 'Contadina',
    phone: '+39 075 456 7890',
    email: 'roberto@gmail.com',
    imageUrl: 'assets/farmer-4.png',
    location: 'Todi, Umbria',
    specialties: ['Frutta', 'Viti', 'Olivi'],
    description: 'Agricoltore multisettoriale con focus su frutta antica e viticoltura tradizionale.',
    coordinates: {
      lat: 42.780,
      lng: 12.409
    }
  }
];

// Current user profile (you can change this to switch accounts)
export const CURRENT_USER_FARMER = FARMERS_DATA[0]; // Antonietta as default 