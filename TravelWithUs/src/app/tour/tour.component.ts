import { Component } from '@angular/core';
import { Tour } from '../models/Tour.models';
import { AdminactionService } from 'src/service/adminaction.service';
import { FormBuilder, FormGroup } from '@angular/forms';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
import * as pdfMake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {
  tours: Tour[] = [];
  filteredTours: Tour[] = [];
  searchTerm: string = '';
  selectedTour: Tour | undefined;
  bookingForm: FormGroup;

  constructor(
    private tourService: AdminactionService,
    private formBuilder: FormBuilder
  ) {
    this.bookingForm = this.formBuilder.group({
      name: [''],
      // Add other form controls as needed
    });
  }

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours(): void {
    this.tourService.getTours().subscribe(
      (data: Tour[]) => {
        this.tours = data;
        this.filteredTours = [...this.tours];
      },
      error => {
        console.error('Error fetching tours:', error);
      }
    );
  }

  searchTours() {
    this.filteredTours = this.tours.filter(tour =>
      tour.tour_Name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectTourForBooking(tour: Tour) {
    this.selectedTour = tour;
  }

  // ... (rest of your component code)

submitBookingForm() {
  if (this.selectedTour) {
    const formData = this.bookingForm.value;
    formData.tourname = this.selectedTour.tour_Name;
    formData.price = this.selectedTour.tour_Price;
    formData.contactDetails = this.selectedTour.contactDetails;

    const pdfContent = [
      {
        text: 'Chayal Tours and Travel',
        style: 'header',
      },
      {
        text: 'Booking Details',
        style: 'subheader',
      },
      { text: `User Name: ${formData.name}`, margin: [0, 10] },
      { text: `Tour Name: ${formData.tourname}`, margin: [0, 10] },
      { text: `Price: ${formData.price}`, margin: [0, 10] },
      { text: `Contact Details: ${formData.contactDetails}`, margin: [0, 10] },
      {
        text: 'Thanks for choosing us!',
        style: 'footer',
        margin: [0, 20],
      },
    ];

    const pdfStyles = {
      header: {
        fontSize: 24,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
        color: '#1E88E5', // Change color to your preference
      },
      subheader: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 10],
      },
      footer: {
        fontSize: 18,
        alignment: 'center',
        color: '#4CAF50', // Change color to your preference
      },
    };

    const pdfDocGenerator = pdfMakeX.createPdf({
      content: pdfContent,
      styles: pdfStyles,
    });
    pdfDocGenerator.download('Chayal_Tours_Booking_Details.pdf');

    this.tourService.booktour(formData).subscribe(
      response => {
        console.log('Booking successful:', response);
      },
      error => {
        console.error('Error booking tour:', error);
      }
    );
  }
}


}
