import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private snackbar: SnackbarService) {}

  intercept(
    request: HttpRequest<unknown>, next: HttpHandler
  ): Observable<any> {
    return next.handle(request).pipe(
      catchError(
        (err: any, caught: Observable<HttpEvent<any>>) => {
          this.snackbar.openSnackBar(err.error.message);

          return of(err);
        }
      )
    );
  }
}
