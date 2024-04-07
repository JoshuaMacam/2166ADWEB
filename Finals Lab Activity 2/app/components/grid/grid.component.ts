import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  twicesong: string = '';
  twice: string[] = ['one spark', 'tt', 'cheer up', 'fancy'];

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar() {
    if (this.twicesong) {
      this.snackBar.open(`Cutest idol is ${this.twicesong}`, 'Close', {
        duration: 3000, // Duration in milliseconds
        panelClass: ['snackbar-background']
      });
    }
  }
}