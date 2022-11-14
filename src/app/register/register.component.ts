import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  //form group
  registerForm = this.formBuilder.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    mob: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  
  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var mob = this.registerForm.value.mob
    var pswd = this.registerForm.value.pswd
    var uname = this.registerForm.value.uname

    

    if (this.registerForm.valid) {
      const result = this.dataService.register(uname, mob, pswd)

      if (result) {
        alert("Register Successfull!")
        this.router.navigateByUrl("")
      }
      else {
        alert("User Already Exist!")
      }
    }else{
      alert("Invalid Form")
    }


  }

}
