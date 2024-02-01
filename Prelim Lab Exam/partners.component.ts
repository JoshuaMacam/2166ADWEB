import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  partners = 'Partners who help me to do this social experiment.';
  showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}

staff = [ 
  { Name: 'Louis',  age: '22', role: 'Barista' },   
  { Name: 'Limiac',  age: '21', role: 'Web Designer' }, 
  { Name: 'Aubrey',  age: '23', role: 'Co-Owner' }, 
  { Name: 'Chrisjohn', age: '23', role: 'Cashier' }, 
  { Name: 'Patrick', age: '24', role: 'Waiter' }, 
  { Name: 'Rymbrent',  age: '21', role: 'Manager' } 
  ];

  roles = 'Click to see my partners!';
}
