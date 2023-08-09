import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-loginall',
  templateUrl: './loginall.component.html',
  styleUrls: ['./loginall.component.css']
})
export class LoginallComponent implements OnInit {
  userEmail: string = '';
  password: string = '';
 logobject:any={
   userEmail:'',
   password:''
 };
 
 constructor(private userService: UserService,private router:Router) { }
 ngOnInit(): void {

 }
 login() {
   
   this.userService.login(this.userEmail, this.password).subscribe(
     response => {
       const token = response.token; // Assuming the API response contains a 'token' property
       localStorage.setItem('jwtUserToken', token); // Store the token in local storage
       console.log('Login successful!');


       const role = this.userService.getRoleFromToken();
       const status =  this.userService.getStatusFromToken();
       console.log('Role:', role);
       if(role=='Admin'){
        // alert(token);
         this.router.navigate(["/adminwork"]);
       }
       if(role=='Traveller'){
         //alert(token);
         this.router.navigate(["/tour"]);
       }
       if(role=='Agent'){
        //alert(status);
        if(status==='Active'){
          this.router.navigate(["/addtour"]);

        }
        else{
      alert("wait for admin's approval");
        }
      }
     },
     error => {
       console.log('Login failed:', error);
     })

    }
  }
