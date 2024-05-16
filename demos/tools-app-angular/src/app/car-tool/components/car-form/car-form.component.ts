import { Component, OnInit, inject, DoCheck, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NewCar } from '../../models/cars';

type CarForm = {
  make: FormControl<string>,
  model: FormControl<string>,
  year: FormControl<number>,
  color: FormControl<string>,
  price: FormControl<number>,
};

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit, DoCheck{

  fb = inject(FormBuilder);

  @Output()
  submitCar = new EventEmitter<NewCar>();

  // the ! symbol tells TypeScript do not complain that I did not assign a value
  carForm!: FormGroup<CarForm>;

  ngOnInit(): void {
    this.carForm = this.fb.nonNullable.group({
      make: '',
      model: '',
      year: 2020,
      color: '',
      price: 10,
   });
  }

  ngDoCheck(): void {
    console.log(this.carForm.value);
  }

  doSubmitCar(): void {
    this.submitCar.emit(this.carForm.value as NewCar);

    this.carForm.reset();
  }
}
