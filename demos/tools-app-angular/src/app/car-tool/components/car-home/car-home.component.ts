import { Component, inject, OnInit } from '@angular/core';
import { concat, switchMap } from 'rxjs';

import { NgFor } from '@angular/common';
import { Cars, NewCar } from '../../models/cars';
import { CarsHttpDataService } from '../../services/cars-http-data.service';
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

  carsData = inject(CarsHttpDataService);

  headerText = "Car Tool";

  cars: Cars[] = [ ];
  //   { id: 1, make: 'Tesla', model: 'Y', year: 2020, color: "blue", price: 50000 },
  //   { id: 2, make: 'Tesla', model: 'X', year: 2023, color: "red", price: 110000 },
  // ];

  ngOnInit() : void{
    this.carsData.all().subscribe(cars => {
      this.cars = cars;
    });
  }

  addCar = (car: NewCar) => {
    this.carsData
    .create(car)
    .pipe(switchMap(()=> this.carsData.all()))
    .subscribe(cars => {
      this.cars = this.cars
      .concat({...car, id: Math.max(...this.cars.map(c => c.id), 0) + 1
    });
  })
  };
  
  // Without rest api
  //   this.cars = this.cars.concat({
  //     ...car,
  //     id: Math.max(...this.cars.map(c => c.id), 0) + 1,
  //   });
  // };

  deleteCar = (carId: number) => {
    this.carsData
    .delete(carId)
    .pipe(switchMap(() => this.carsData.all()))
    .subscribe(cars => {
      this.cars = this.cars.filter(c => c.id !== carId);
    })
    // this.cars = this.cars.filter(c => c.id !== carId);
  };
  
}

