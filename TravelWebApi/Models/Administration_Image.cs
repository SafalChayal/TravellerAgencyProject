using System.ComponentModel.DataAnnotations;

namespace TravelWebApi.Models
{
    public class Administration_Image
    {
        [Key]
        public int Id { get; set; }

        public string ? Image { get; set; }

        public string ? Description { get; set; }

    }
}
