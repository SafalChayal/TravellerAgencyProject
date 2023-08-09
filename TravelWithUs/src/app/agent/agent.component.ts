import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface TravellingAgent {
  first_Name: string;
  last_Name: string;
  image_Url?: string;
  title: string;
  age: number;
  city: string;
  state: string;
  country: string;
}

interface User {
 
  userName: string;
  userEmail: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  registrationForm!: FormGroup;
  imageFile: File | null = null; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      first_Name: [null, Validators.required],
      last_Name: [null, Validators.required],
      title: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      userEmail: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onImageChange(event: any): void {
    const files = event.target.files;
    if (files.length > 0) {
      this.imageFile = files[0];
    }
  }

  onSubmit(): void {
    if (this.registrationForm.valid && this.imageFile) {
      const travellerData: TravellingAgent = {
       
        first_Name: this.registrationForm.value.first_Name,
        last_Name: this.registrationForm.value.last_Name,
        image_Url: '', 
        title: this.registrationForm.value.title,
        age: this.registrationForm.value.age,
        city: this.registrationForm.value.city,
        state: this.registrationForm.value.state,
        country: this.registrationForm.value.country,
      };

      const userData: User = {
       
        userName:  this.registrationForm.value.first_Name+ this.registrationForm.value.last_Name, 
        userEmail: this.registrationForm.value.userEmail,
        password: this.registrationForm.value.password,
        role: 'Agent',
      };

      this.imageToBase64(this.imageFile).then((base64String) => {
        travellerData.image_Url = base64String; 

        this.postDataToApi(travellerData, userData);
      });
    }
  }

  postDataToApi(travellerData: TravellingAgent, userData: User): void {
    const apiUrl = 'https://localhost:7080/api/TravellingAgent';

    this.http.post(apiUrl, travellerData).subscribe(
      (response) => {
        console.log('Traveller registered successfully:', response);
      },
      (error) => {
        console.error('Error registering traveller:', error);
      }
    );

    // Post User data to API
    const userApiUrl = 'https://localhost:7080/api/Users';
    this.http.post(userApiUrl, userData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        alert('You can now login');
        // window.location.reload();
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }

  imageToBase64(file: File): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
  
}
