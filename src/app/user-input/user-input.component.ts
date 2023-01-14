import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  constructor(private router:Router){}
  @ViewChild('f') form:NgForm
  onSubmit(){
    console.log(this.form.value.userid)
    let userId=this.form.value.userid
    this.router.navigate(['/user/',userId])
  }
}
