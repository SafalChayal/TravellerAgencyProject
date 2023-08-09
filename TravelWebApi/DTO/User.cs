using System.ComponentModel.DataAnnotations;
using TravelWebApi.Models;

namespace TravelWebApi.DTO
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string? UserName { get; set; }

        public string? UserEmail { get; set; }
        public string? Password { get; set; }

        public string? Role { get; set; }
        public string? Status { get; set; } = "InActive";

        public int? BookingId { get; set; }

        public int ? FeedbackId { get; set; }

        public List<BookingClass>? BookingClass  { get; set; }

        public List<Feedback>? Feedback { get; set; }


    }
}
