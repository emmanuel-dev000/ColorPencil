import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-square',
  imports: [CommonModule],
  templateUrl: './color-square.component.html',
  styleUrl: './color-square.component.css'
})

export class ColorSquareComponent {
  @Input({required: true}) name : string = '';
  @Input({required: true}) hexcode : string = '';
  constructor(private colorService : ColorService) {
  }
  
  activateColor() {
    this.colorService.activateColor(this.name);
  }

  get isColorActivated() {
    return this.colorService.activatedColors.find(x => x == this.name) != null;
  }
}
