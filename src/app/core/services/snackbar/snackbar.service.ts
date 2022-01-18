import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(
    message: string,
    type: string = 'warn',
    action: string = 'Ok',
    duration: number = 3000
  ): void {
    // primary, warn, accent
    const typeClass = `mat-${type}`;

    const config: MatSnackBarConfig = {
      duration,
      panelClass: ['mat-toolbar', typeClass]
    };

    this.snackBar.open(message, action, config);
  }
}
