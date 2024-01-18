import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

//String interpolation
position = "CEO";
work_experience = '10';
email = "ejmacam242@gmail.com";
website = "jua.example.com";
phone = '09690660414';

imageUrl:string='assets/profile.jpg';
imageW: number = 110;
imageH: number = 100;

}
