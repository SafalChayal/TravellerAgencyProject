import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Image{
  image ?: string,
  description: string
}
@Component({
  selector: 'app-postgallery',
  templateUrl: './postgallery.component.html',
  styleUrls: ['./postgallery.component.css']
})
export class PostgalleryComponent {

  registrationForm!: FormGroup;
  imageFile: File | null = null; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      description: [null, Validators.required]


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
      const travellerData: Image = {
       

        description: this.registrationForm.value.description,
        image: ''
       
      };
      this.imageToBase64(this.imageFile).then((base64String) => {
        travellerData.image = base64String; 

        this.postDataToApi(travellerData);
      });
    }
    
    }

    postDataToApi(travellerData: Image): void {
      const apiUrl = 'https://localhost:7080/api/Administration_Image';
  
      this.http.post(apiUrl, travellerData).subscribe(
        (response) => {
          console.log('Traveller registered successfully:', response);
          alert("Image Added");
          this.registrationForm.reset();
        },
        (error) => {
          console.error('Error registering traveller:', error);
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