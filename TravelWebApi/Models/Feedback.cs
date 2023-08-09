using System.ComponentModel.DataAnnotations;
using TravelWebApi.DTO;

namespace TravelWebApi.Models
{
    public class Feedback
    {
        [Key]
        public int Feedback_Id { get; set; }

        public string ? Feedback_Description { get; set; }
       
        public string ? Email_Id { get; set; }

        public int ? UserId { get; set; }

        public User ? User { get; set; }

        
       
    }
}
