using System.ComponentModel.DataAnnotations;
using TravelWebApi.DTO;

namespace TravelWebApi.Models
{
    public class BookingClass
    {
        [Key]
        public int Booking_Id { get; set; }

        public string? Name { get; set; }
        public string? Description { get; set; }

        public int? AgentAddingTourId { get; set; }
        public string? Tour_Name { get; set; }

        public int? UserId { get; set; }

        public User? User { get; set; }

        public AgentAddingTour? AgentAddingTour { get; set; }
    }
}
