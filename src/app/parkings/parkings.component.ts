import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkinginfo';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  parkings: ParkingInfo[];

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.parkings = this.parkingService.getParkings();
  }

}
