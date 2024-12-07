import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-name',
  imports: [],
  templateUrl: './color-name.component.html',
  styleUrl: './color-name.component.css'
})
export class ColorNameComponent {
  constructor (private colorService: ColorService) {
  }

  get getActivatedColors() {
    return this.colorService.activatedColors.join(", ");
  }
}
