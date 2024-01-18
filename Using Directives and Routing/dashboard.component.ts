import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
//Using ngIf to toggle text display
showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}

staff = [ 
  { firstName: 'Monday', time: '7:00am - 10:00pm', open: 'Open' },   
  { firstName: 'Tuesday', time: '7:00am - 10:00pm', open: 'Open' }, 
  { firstName: 'Wednesday', time: '7:00am - 10:00pm', open: 'Open' }, 
  { firstName: 'Thursday', time: '7:00am - 10:00pm', open: 'Open' }, 
  { firstName: 'Friday', time: '7:00am - 10:00pm', open: 'Open' },
  { firstName: 'Saturday', time: '7:00am - 10:00pm', open: 'Open' }, 
  { firstName: 'Sunday', time: '7:00am - 10:00pm', open: 'Open' }, 
  ];

products = [
  { imageUrl: 'assets/brewed.jpg', name: 'Brewed Coffee', price: '₱100.00' },
  { imageUrl: 'assets/tea.jpg', name: 'Brewed Tea', price: '₱100.00' },
  { imageUrl: 'assets/vanilla.jpg', name: 'Nitro Vanilla', price: '₱150.00' },
  { imageUrl: 'assets/espresso.jpg', name: 'Fancy Product 3', price: '₱150.00' },
];

}
