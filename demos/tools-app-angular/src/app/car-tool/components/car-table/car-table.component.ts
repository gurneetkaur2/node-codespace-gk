import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Cars } from '../../models/cars';

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  @Input()
  cars: Cars[] = [];

  @Output()
  deleteCar = new EventEmitter<number>();

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }
}
