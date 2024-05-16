import { Component, inject, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { NgFor } from '@angular/common';
import { Color, NewColor } from '../../models/colors';
import { ColorsHttpDataService } from '../../services/colors-http-data.service';
import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { ColorListComponent } from '../color-list/color-list.component';
import { ColorFormComponent } from '../color-form/color-form.component';


@Component({
  selector: 'app-color-home',
  standalone: true,
  imports: [ToolHeaderComponent, ColorListComponent, ColorFormComponent],
  templateUrl: './color-home.component.html',
  styleUrl: './color-home.component.css'
})
export class ColorHomeComponent {

  colorsData = inject(ColorsHttpDataService);

  headerText = "Color Tool";

   colors: Color[] = [ ];
  //   { id: 1, name: 'red', hexcode: 'FF0000' },
  //   { id: 2, name: 'green', hexcode: '00FF00' },
  //   { id: 3, name: 'blue', hexcode: '0000FF' },
  // ];

  ngOnInit(): void {
    this.colorsData.all().subscribe(colors => {
      this.colors = colors;
    });
  }

  addColor = (color: NewColor) => {
    this.colorsData
    .create(color)
    .pipe(switchMap(()=> this.colorsData.all()))
    .subscribe(colors => {
      this.colors = colors;
    })
  };

  // Without rest api
  //   this.colors = this.colors.concat({
  //     ...color,
  //     id: Math.max(...this.colors.map(c => c.id), 0) + 1,
  //   });
  // };
 // another way
  // this.colors = [
  //  ...this.colors,
  // {
  //   ...color,
  //   id: Math.max(...this.colors.map(c => c.id), 0) + 1,

  deleteColor = (colorId: number) => {
    this.colorsData
    .delete(colorId)
    .pipe(switchMap(()=> this.colorsData.all()))
    .subscribe(colors => {
      this.colors = this.colors.filter(c => c.id !== colorId);
    })
  };
}
