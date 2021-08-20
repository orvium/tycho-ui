import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'Ok', duration: number = 3000) {
    let config: MatSnackBarConfig = {
      duration,
      panelClass: ['mat-toolbar', 'mat-warn']
    };

    this._snackBar.open(message, action, config);
  }
}
