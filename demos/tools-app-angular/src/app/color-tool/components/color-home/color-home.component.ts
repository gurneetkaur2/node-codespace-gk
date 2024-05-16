import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Color } from '../../models/colors';
import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { ColorListComponent } from '../color-list/color-list.component';
import { ColorFormComponent } from '../color-form/color-form.component';


@Component({
  selector: 'app-color-home',
  standalone: true,
  imports: [NgFor, ToolHeaderComponent, ColorListComponent, ColorFormComponent],
  templateUrl: './color-home.component.html',
  styleUrl: './color-home.component.css'
})
export class ColorHomeComponent {

  headerText = "Color Tool";

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'FF0000' },
    { id: 2, name: 'green', hexcode: '00FF00' },
    { id: 3, name: 'blue', hexcode: '0000FF' },
  ];
}
