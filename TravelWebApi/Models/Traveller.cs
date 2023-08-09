using System.ComponentModel.DataAnnotations;

namespace TravelWebApi.Models
{
    public class Traveller
    {
        [Key]
        public  int Traveller_Id { get; set; }
        public string ? First_Name { get; set; }
        public string ? Last_Name { get; set; } 
        public string ? Title { get; set; }
        public int Age { get; set; }
        public string ? City { get; set; }

        public string ? State { get; set; }
        public string ? Country { get; set; }


    }
}
