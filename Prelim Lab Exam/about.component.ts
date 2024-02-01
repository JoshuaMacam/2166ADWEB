import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  clickCount=0
  clickMe() {
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount=0;
  }

  description = 'JUA Coffee Shop is a place where you will feel comfortable. This shop will make you feel like you are sitting on a white sand beside a beach or sitting on your favorite chair at home while watching youre favorite series. It is located at 0342 Narra St. El Rosario Village, Mabiga, Mabalacat City, Pampanga. It was founded on December 2023 by Joshua Emmanuel Macam and Aubrey Lisber Castro. '

}

