import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkinginfo';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  parkings: ParkingInfo[];
  constructor() { }

  ngOnInit(): void {
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
    this.parkings = []; // Initialisation de this.parking !
    this.parkings.push(parking1);
    this.parkings.push(parking2);
  }

}
