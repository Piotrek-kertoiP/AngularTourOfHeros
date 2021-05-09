import { Component, OnInit } from '@angular/core';
import {Vehicle} from './vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicle: Vehicle = {id: 1, make: 'Audi'};

  vehicles: Vehicle[] = [
    {id: 1, make: 'Audi'},
    {id: 2, make: 'BMW'},
    {id: 3, make: 'Mercedes'}
  ];

  selectedVehicle: Vehicle | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    console.log(this.selectedVehicle)
  }

}
