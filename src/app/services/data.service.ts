import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //database

  database: any = {
    6238536683: { mob: 6238536683, password: 6238536683, uname: 'unni' },
    9745053270: { mob: 9745053270, password: 9745053270, uname: 'ambadi' },
    9495470715: { mob: 9495470715, password: 9495470715, uname: 'sree' },
    9496456886: { mob: 9496456886, password: 9496456886, uname: 'jp' }

  }

  constructor() {
    this.getDetails()
   }


  //saveDetails
  saveDetails(){
    localStorage.setItem('database',JSON.stringify(this.database))
  }

  //getDetails
  getDetails(){
   this.database =JSON.parse(localStorage.getItem('database') || '') 
  }

  //register

  register(uname: any, mob: any, password: any) {
    let userDetails = this.database

    if (mob in userDetails) {
      return false
    }
    else {
      userDetails[mob] = {
        mob,
        password,
        uname
        
      }
      this.saveDetails()
      return true
    }
  }

  //login


  login(mob: any, pswd: any) {


    let userDetails = this.database

    if (mob in userDetails) {
      if (pswd == userDetails[mob]['password']) {
        return true

      }
      else {
        alert("Incorrect Password!")
        return false
      }
    }
    else {
      alert("User does not exist!")
      return false
    }


  }



}
