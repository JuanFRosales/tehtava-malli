import L from 'leaflet';
import { Restaurant } from "./interfaces/Restaurant";


export function initializeMap(mapElementId: string): L.Map {
  const map = L.map(mapElementId).setView([0, 0], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  return map;
}

export function addMarkerToMap(map: L.Map, restaurant: Restaurant): void {
  const { name, address, location } = restaurant;
  const marker = L.marker([location.coordinates[1], location.coordinates[0]]).addTo(map);

  marker.bindPopup(`<b>${name}</b><br>${address}`).openPopup();
  map.setView([location.coordinates[1], location.coordinates[0], 16]);
}





