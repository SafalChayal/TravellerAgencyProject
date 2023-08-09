using System.ComponentModel.DataAnnotations;

namespace TravelWebApi.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        public string ? Name{ get; set; }

        public int ? price { get; set; }

        public string ? TourName { get; set; }


    }
}
