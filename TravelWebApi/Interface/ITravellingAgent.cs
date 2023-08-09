using TravelWebApi.Models;

namespace TravelWebApi.Interface
{
    public interface ITravellingAgent
    {
        public IEnumerable<TravellingAgent> GetTravellingAgent();

        public TravellingAgent GetByIdTravellingAgent(int Id);
        public void InsertTravellingAgent(TravellingAgent traveller);
        public void UpdateTravellingAgent(TravellingAgent traveller);
        public TravellingAgent DeleteTravellingAgent(int Id);
        public void Save();

    }
}
