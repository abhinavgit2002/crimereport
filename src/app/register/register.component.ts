import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  mob=""
  pswd=""

  constructor(private router :Router,private dataService : DataService) { }

  ngOnInit(): void {
  }

  register(){
    var mob = this.mob
    var pswd = this.pswd
    var uname = this.uname

    const result = this.dataService.register(uname,mob,pswd)

    if(result){
      alert("Register Successfull!")
      this.router.navigateByUrl("")
    }
    else{
      alert("User Already Exist!")
    }
  }

}
