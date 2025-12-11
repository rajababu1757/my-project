import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   userForm: FormGroup
  constructor() { 
    this.userForm=new FormGroup({
      email: new FormControl('',  Validators.required),
      password: new FormControl('', Validators.required),      
    })
  } 

  ngOnInit(): void {
  }

  registerForm(){  
      console.log(this.userForm.value);
  }

}
