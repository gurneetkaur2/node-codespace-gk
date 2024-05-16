import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Cars } from '../../models/cars';
import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { CarTableComponent } from '../car-table/car-table.component';


@Component({
  selector: 'app-car-home',
  standalone: true,
  imports: [NgFor, ToolHeaderComponent, CarTableComponent],
  templateUrl: './car-home.component.html',
  styleUrl: './car-home.component.css'
})
export class CarHomeComponent {

  headerText = "Car Tool";

  cars: Cars[] = [
    { id: 1, make: 'Tesla', model: 'Y', year: 2020, color: "blue", price: 50000 },
    { id: 2, make: 'Tesla', model: 'X', year: 2023, color: "red", price: 110000 },
  ];

}
