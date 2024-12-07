import { Injectable } from '@angular/core';
import { Color } from './color.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colors : Array<Color> = new Array<Color>();
  activatedColors : Array<string> = new Array<string>();
  constructor() {
    this.colors = [
      {
        id: 1,
        active: false,        
        name: "Blue",
        hexcode: "#36CDEC",
      },
      {
        id: 2,
        active: false,
        name: "Indigo",
        hexcode: "#A587CA"
      },
      {
        id: 3,
        active: false,
        name: "Green",
        hexcode: "#8FE968"
      },
      {
        id: 4,
        active: false,
        name: "Yellow",
        hexcode: "#FFEA56"
      },
      {
        id: 5,
        active: false,
        name: "Red",
        hexcode: "#FE797B"
      },
    ];
  }

  activateColor(name: string) {
    this.activatedColors.push(name);
    console.log("------------------------");
    
    for (let index = 0; index < this.activatedColors.length; index++) {
      const element =  this.activatedColors[index];
      console.log(element);
    }
  }
}