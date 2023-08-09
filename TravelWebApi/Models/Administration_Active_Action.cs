using System.ComponentModel.DataAnnotations;

namespace TravelWebApi.Models
{
    public class Administration_Active_Action
    { 

        [Key]
        public int Id { get; set; }

        public int TravellingAgent_Id { get; set; }

        public string ? Status { get; set; }

        public string ? Image_Url { get; set; }

    }
}
