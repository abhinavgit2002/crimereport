import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //for string interpolation

  // a= 'welcome to our system!'
  // b= '...'

  // property binding

  // a="mob please"



   //variable/property

   mob=""
   pswd=""
 
     

  constructor(private router :Router, private dataService:DataService) { }

  ngOnInit(): void {

  }


  login() {

    var mob = this.mob
    var pswd = this.pswd
    const result = this.dataService.login(mob,pswd)
    
    if(result){
      alert("Login Successfull!")
      this.router.navigateByUrl("dashboard")
    }

  }

 
  

}
