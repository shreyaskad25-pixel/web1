import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logic',
  standalone: false,
  styleUrl: './logic.css',
  templateUrl: './logic.html',
})
export class Logic {
  loginForm: FormGroup;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    this.loginError = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.getRawValue();
    const validCredentials = username === 'admin' && password === 'admin123';

    if (validCredentials) {
      this.router.navigate(['/']);
      return;
    }

    this.loginError = 'Invalid username or password. Please try again.';
    this.loginForm.get('password')?.reset();
  }
}
