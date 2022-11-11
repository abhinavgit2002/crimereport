import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variable/property

  //database

  database: any = {
    6238536683: { mob: 6238536683, password: 6238536683, uname: 'unni' },
    9745053270: { mob: 9745053270, password: 9745053270, uname: 'ambadi' },
    9495470715: { mob: 9495470715, password: 9495470715, uname: 'sree' },
    9496456886: { mob: 9496456886, password: 9496456886, uname: 'jp' }

  }
  //for string interpolation
  // a= 'welcome to our system!'
  // b= '...'

  // property binding
  // a="mob please"

   

  constructor() { }

  ngOnInit(): void {

  }



  // login() {
  //   var mob = this.mob
  //   var pswd = this.pswd
    
  //   let userDetails = this.database

  //   if (mob in userDetails) 
  //   {
  //     if (pswd == userDetails[mob]['password']) 
  //     {
  //       alert("Login Sucessfull!")
  //     }
  //     else 
  //     {
  //       alert("Incorrect Password!")
  //     }
  //   } 
  //   else 
  //   {
  //     alert("User does not exist!")
  //   }


  // }

  login(m:any,p:any) {
  
    
    var mob = m.value
    var pswd = p.value
    
    let userDetails = this.database

    if (mob in userDetails) 
    {
      if (pswd == userDetails[mob]['password']) 
      {
        alert("Login Sucessfull!")
      }
      else 
      {
        alert("Incorrect Password!")
      }
    } 
    else 
    {
      alert("User does not exist!")
    }


  }

}
