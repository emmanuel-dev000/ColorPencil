import { Component } from '@angular/core';
import { ColorSquareComponent } from "../color-square/color-square.component";
import { ColorService } from '../color.service';
import { Color } from '../color.interface';

@Component({
  selector: 'app-color-dashboard',
  imports: [ColorSquareComponent],
  templateUrl: './color-dashboard.component.html',
  styleUrl: './color-dashboard.component.css'
})
export class ColorDashboardComponent {
  colors : Array<Color>;
  constructor(private colorService: ColorService) {
    this.colors = colorService.colors;
  }
}
