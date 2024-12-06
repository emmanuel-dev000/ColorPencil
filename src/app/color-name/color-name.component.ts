import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-name',
  imports: [],
  templateUrl: './color-name.component.html',
  styleUrl: './color-name.component.css'
})
export class ColorNameComponent {
  activatedColors : Array<string> = new Array<string>;
  constructor (private colorService: ColorService) {
    this.activatedColors = colorService.activatedColors;
  }

  get getActivatedColors() {
    return this.activatedColors.join(", ");
  }
}
