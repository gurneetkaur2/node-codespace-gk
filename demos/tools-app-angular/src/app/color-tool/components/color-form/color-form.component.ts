import { Component, OnInit, inject, DoCheck } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';

type ColorForm = {
  name: FormControl<string>,
  hexcode: FormControl<string>,
};

@Component({
  selector: 'app-color-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.css'
})
export class ColorFormComponent implements OnInit, DoCheck {

  fb = inject(FormBuilder);

  // the ! symbol tells TypeScript do not complain that I did not assign a value
  colorForm!: FormGroup<ColorForm>;

  ngOnInit(): void {
    this.colorForm = this.fb.nonNullable.group({
      name: '',
      hexcode: '',
    });
  }

  ngDoCheck(): void {
    console.log(this.colorForm.value);
  }
}