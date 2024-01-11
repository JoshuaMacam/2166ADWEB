import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = "Joshua Emmanuel Macam";
  appliedCSS = 'blue';
  notAppliedCSS = false;
  myColor = 'gray';

  clickCount=0
  clickMe() {
    this.clickCount++;
  }



}
