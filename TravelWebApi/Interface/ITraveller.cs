using TravelWebApi.Models;

namespace TravelWebApi.Interface
{
    public interface ITraveller
    {
        public  IEnumerable<Traveller> GetTravellers();

        public Traveller  GetById(int Id);
        public void Insert(Traveller traveller);
        public void UpdateTraveller(Traveller traveller);
        public Traveller DeleteTraveller(int Id);
        public void Save();
    }
}
