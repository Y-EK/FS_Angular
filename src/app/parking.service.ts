import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkinginfo';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor() { }

  getParkings(): ParkingInfo[]{
    let parking1: ParkingInfo = {
      id: 1,
      nom: 'parking 1',
      nbPlacesDispo: 150,
      nbPlacesTotal: 200,
      statut: 'OUVERT',
      heureMaj: '16h 15'
    }
    let parking2: ParkingInfo = {
      id: 2,
      nom: 'parking 2',
      nbPlacesDispo: 300,
      nbPlacesTotal: 500,
      statut: 'FERME',
      heureMaj: '09h 30'
    }
    let parkings = [];
    parkings.push(parking1);
    parkings.push(parking2);
    return parkings; 
  }
}
