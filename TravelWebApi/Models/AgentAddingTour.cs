using System.ComponentModel.DataAnnotations;

namespace TravelWebApi.Models
{
    public class AgentAddingTour
    {
        [Key]
        public int Tour_Id { get; set; }

        public string ? Tour_Name { get; set; }
        public string ? Tour_Description { get; set;}
        public double Tour_Price { get; set; }

        public string ? Image_Url { get; set; }

        public int TourDays { get; set; }
        public int TourNights { get; set; }

        public string ? ContactDetails { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set;}

        public string ? Food { get; set; }

        public string ? Accomodation { get; set; }

        public int ? Booking_Id { get; set; }

        public List<BookingClass> ? BookingClass { get; set; }

        

    }
}
