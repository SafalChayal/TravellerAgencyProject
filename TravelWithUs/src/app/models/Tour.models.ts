export interface Tour{
  tour_Name: string,
  tour_Description: string,
  tour_Price: number,
  image_Url?: string,
  tourDays: number,
  tourNights: number,
  contactDetails: string,
  startDate: Date,
  endDate: Date,
  food: string,
  accomodation: string
}
