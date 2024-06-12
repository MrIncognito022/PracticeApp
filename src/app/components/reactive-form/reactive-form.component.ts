import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Validation from '../../utils/validation';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  form:FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false)
  })
  submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      username:['',[Validators.required,Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },

    //Custom Validation
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
  );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
