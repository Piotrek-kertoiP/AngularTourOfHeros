import {Component, OnInit} from '@angular/core';
import {Vehicle} from './vehicles/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Tour of Vehicles';
  constructor() {}
  ngOnInit(): void {}
}
