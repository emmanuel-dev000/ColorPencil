import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-color-square',
  imports: [CommonModule],
  templateUrl: './color-square.component.html',
  styleUrl: './color-square.component.css'
})

export class ColorSquareComponent {
  @Input({required: true}) name : string = '';
  @Input({required: true}) hexcode : string = '';
  
  activateColor() {
    alert(this.name + " is activated");
  }
}
