import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Role } from 'src/app/core/enums/role.enum';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;
  role: typeof Role;

  constructor(
    private _fb: FormBuilder,
    private _authApi: AuthenticationService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.role = Role;
  }

  generateForm(): void {
    this.form = this._fb.group({
      email: [],
      password: [],
      role: [ Role.Donor ]
    });
  }

  login(): void {
    let formValue = this.form.value;

    this._authApi.login$(
      formValue.email, formValue.password, formValue.role
    ).pipe(
      tap((user: User): void => this.redirect(user))
    ).subscribe();
  }

  redirect(user: User): void {
    if (!user) return;

    let path: string = user.role === Role.Donor ? 'donor' : 'consumer';

    this._router.navigate(['/', path, 'view']);
  }
}
