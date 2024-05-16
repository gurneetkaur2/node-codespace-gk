import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Color } from '../../models/colors';
import { ConnectableObservable } from 'rxjs';

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
  
  @Output()
  deleteColor = new EventEmitter<number>();

  clickMe(colorName: string) {
    console.log(`clicked: ${colorName}`);
  }

  doDeleteColor(colorId: number) {
    this.deleteColor.emit(colorId);
  }
}
