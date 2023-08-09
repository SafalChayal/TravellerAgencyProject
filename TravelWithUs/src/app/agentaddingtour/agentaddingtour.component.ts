import { Component, OnInit } from '@angular/core';
import { AdminactionService } from 'src/service/adminaction.service';
import { Tour } from '../models/Tour.models';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-agentaddingtour',
  templateUrl: './agentaddingtour.component.html',
  styleUrls: ['./agentaddingtour.component.css']
})
export class AgentAddingTourComponent implements OnInit {

  registrationForm!: FormGroup;
  imageFile: File | null = null; 

  constructor(private s:AdminactionService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      tour_Name: [null, Validators.required],
      tour_Description: [null, Validators.required],
      tour_Price: [null, Validators.required],
      
      tourDays: [null, [Validators.required]],
      tourNights: [null, Validators.required],
      contactDetails: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, [Validators.required]],
      food: [null, Validators.required],
      accomodation: [null, Validators.required]
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
      const travellerData: Tour = {
        
        tour_Name: this.registrationForm.value.tour_Name,
        tour_Description: this.registrationForm.value.tour_Description,
        tour_Price: this.registrationForm.value.tour_Price,
        image_Url: '',
        tourDays: this.registrationForm.value.tourDays,
        tourNights: this.registrationForm.value.tourNights,
        contactDetails: this.registrationForm.value.contactDetails,
        startDate: this.registrationForm.value.startDate,
        endDate: this.registrationForm.value.endDate,
       
        food:this.registrationForm.value.food,
        accomodation: this.registrationForm.value.accomodation
      };

      

      this.imageToBase64(this.imageFile).then((base64String) => {
        travellerData.image_Url = base64String; 

        this.postDataToApi(travellerData);
      });
    }
  }

  postDataToApi(travellerData: Tour): void {

    this.s.addTour(travellerData).subscribe(
      (response) => {
        console.log(response);
        alert('Traveller registered successfully:');
      },
      (error) => {
        console.error('Error registering traveller:', error);
      }
    );
    this.registrationForm.reset();


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
