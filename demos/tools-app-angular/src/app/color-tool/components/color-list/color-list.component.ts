import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Color } from '../../models/colors';

@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.css'
})
export class ColorListComponent {
  @Input()
  colors: Color[] = [];
  
}
