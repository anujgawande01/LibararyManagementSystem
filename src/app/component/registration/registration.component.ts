import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}



registerForm=new FormGroup({
  firstName: new FormControl("",[Validators.required]),
  lastName: new FormControl("",[Validators.required]),
  birthdayDate: new FormControl("",[Validators.required]),
  gender: new FormControl("male"),
  emailAddress: new FormControl("",[Validators.required]),
  phoneNumber: new FormControl("",[
    Validators.required,
    Validators.pattern("[0-9]*"),
    Validators.minLength(10),
    Validators.maxLength(10)
  ]),
  category: new FormControl(""),
  userId: new FormControl("", [Validators.required]),
  password: new FormControl("",[Validators.required]),
})


RegisterSubmit(event:any){
 event.preventDefault();
 if (this.registerForm.invalid) return;
 console.log(this.registerForm.value);
}


getErrors(control: any) {
  return control.invalid && control.touched;
}
}