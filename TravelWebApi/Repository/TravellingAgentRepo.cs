using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Repository
{
    public class TravellingAgentRepo :ITravellingAgent
    {
        private readonly MainDbContext _context;


        public TravellingAgentRepo(MainDbContext context)
        {
            _context = context;
        }

        public TravellingAgent DeleteTravellingAgent(int Id)
        {
            TravellingAgent record = _context.TravelingAgents.Find(Id);
            if (record == null)
            {
                return null;
            }
            _context.TravelingAgents.Remove(record);
            Save();
            return record;
        }

        public TravellingAgent GetByIdTravellingAgent(int Id)
        {


            return _context.TravelingAgents.Find(Id);
        }

        public IEnumerable<TravellingAgent> GetTravellingAgent()
        {
            return _context.TravelingAgents.ToList();
        }

        public void InsertTravellingAgent(TravellingAgent traveller)
        {
            _context.Add(traveller);
            Save();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateTravellingAgent(TravellingAgent traveller)
        {

            _context.Entry(traveller).State = EntityState.Modified;
            Save();


        }

    }
}
