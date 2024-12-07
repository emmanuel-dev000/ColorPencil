import { Component } from '@angular/core';
import { ColorDashboardComponent } from './color-dashboard/color-dashboard.component';
import { ColorNameComponent } from "./color-name/color-name.component";
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  imports: [ColorDashboardComponent, ColorNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ColorPencil';
  constructor(private colorService : ColorService) {
  }
  
  clearActivatedColors() {
    this.colorService.clearActivatedColors();
  }
}
