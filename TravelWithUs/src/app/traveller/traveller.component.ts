import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})
export class TravellerComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      // Traveller Data
      first_Name: [null, Validators.required],
      last_Name: [null, Validators.required],
      title: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],

      userName: [null],
      role:[null],
      userEmail: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const travellerData = {
        first_Name: this.registrationForm.value.first_Name,
        last_Name: this.registrationForm.value.last_Name,
        title: this.registrationForm.value.title,
        age: this.registrationForm.value.age,
        city: this.registrationForm.value.city,
        state: this.registrationForm.value.state,
        country: this.registrationForm.value.country
      };

      const userData = {
        userName: this.registrationForm.value.first_Name+this.registrationForm.value.last_Name,
        userEmail: this.registrationForm.value.userEmail,
        password: this.registrationForm.value.password,
        role:"Traveller"
      };

      this.postTravellerData(travellerData);
      this.postUserData(userData);
    }
  }

  postTravellerData(travellerData: any): void {
    const travellerApiUrl = 'https://localhost:7080/api/Traveller';

    this.http.post(travellerApiUrl, travellerData).subscribe(
      (response) => {
        console.log('Traveller registered successfully:', response);
      },
      (error) => {
        console.error('Error registering traveller:', error);
      }
    );
  }

  postUserData(userData: any): void {
    const userApiUrl = 'https://localhost:7080/api/Users';

    this.http.post(userApiUrl, userData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert("You can now login");
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}































// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-traveller',
//   templateUrl: './traveller.component.html',
//   styleUrls: ['./traveller.component.css']
// })
// export class TravellerComponent implements OnInit{

//   registrationForm!: FormGroup ;

//   constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

//   ngOnInit(): void {
//     this.registrationForm = this.formBuilder.group({
//       first_Name: [null, Validators.required],
//       last_Name: [null, Validators.required],
//       title: [null,Validators.required],
//       age: [null, [Validators.required, Validators.min(1)]],
//       city: [null,Validators.required],
//       state: [null,Validators.required],
//       country: [null,Validators.required],
    
     

//     });
//   }

//   onSubmit(): void {

//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;
//       this.postDataToApi(formData);  }
//     }

//     postDataToApi(formData: any): void {
//       const apiUrl = 'https://localhost:7080/api/Traveller';
  
//       this.http.post(apiUrl, formData).subscribe(
//         (response) => {
//           console.log('You are Registered:', response);
//           alert("You can now login");
//           window.location.reload();
          
//         },
//         (error) => {
//           console.error('Error posting data:', error);
//         }
//       );
//     }
// }
