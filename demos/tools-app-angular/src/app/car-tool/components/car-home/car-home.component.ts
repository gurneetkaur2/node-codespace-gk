import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Cars } from '../../models/cars';
import { NewCar } from '../../models/cars';
import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { CarTableComponent } from '../car-table/car-table.component';
import { CarFormComponent } from '../car-form/car-form.component';


@Component({
  selector: 'app-car-home',
  standalone: true,
  imports: [ToolHeaderComponent, CarTableComponent, CarFormComponent],
  templateUrl: './car-home.component.html',
  styleUrl: './car-home.component.css'
})
export class CarHomeComponent {

  headerText = "Car Tool";

  cars: Cars[] = [
    { id: 1, make: 'Tesla', model: 'Y', year: 2020, color: "blue", price: 50000 },
    { id: 2, make: 'Tesla', model: 'X', year: 2023, color: "red", price: 110000 },
  ];

  addCar = (car: NewCar) => {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
  };
  
}

