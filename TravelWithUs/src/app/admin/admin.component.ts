import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


interface User {
 
  userName: string;
  userEmail: string;
  password: string;
  role: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: [null, Validators.required],
      userEmail: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      alert("Please Try Again");
      return;
    }

    const userData: User = {
       
      userName:  this.registrationForm.value.first_Name+ this.registrationForm.value.last_Name, // Placeholder for the userName
      userEmail: this.registrationForm.value.userEmail,
      password: this.registrationForm.value.password,
      role: 'Admin', 
    };
    const apiUrl = 'https://localhost:7080/api/Users';

    this.http.post(apiUrl, userData).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
        alert("Successfully Registered");
        window.location.reload();
        
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
