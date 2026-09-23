import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue],
    });
  }

  get fullName() {
    return this.signupForm.get('fullName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get terms() {
    return this.signupForm.get('terms');
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      alert('Signup successful!');
      this.signupForm.reset();
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
