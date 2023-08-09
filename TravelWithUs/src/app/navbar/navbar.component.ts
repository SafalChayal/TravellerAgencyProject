import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}
  private isLoggedInValue = false;

  login() {
    this.isLoggedInValue = true;
  }

 

 
  isloggedIn():boolean{
    return !!localStorage.getItem('jwtUserToken')
  }
  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
