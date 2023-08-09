using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Repository
{
    public class AgentAddingTourRepo:IAgentAddingTour
    {
        private readonly MainDbContext _context;


        public AgentAddingTourRepo(MainDbContext context)
        {
            _context = context;
        }

        public AgentAddingTour DeleteAgentAddingTour(int Id)
        {
            AgentAddingTour record = _context.AgentAddingTours.Find(Id);
            if (record == null)
            {
                return null;
            }
            _context.AgentAddingTours.Remove(record);
            Save();
            return record;
        }

        public AgentAddingTour GetOne(int Id)
        {


            return _context.AgentAddingTours.Find(Id);
        }

        public IEnumerable<AgentAddingTour> GetAgentAddingTours()
        {
            return _context.AgentAddingTours.ToList();
        }

        public void InsertAgentAddingTour(AgentAddingTour traveller)
        {
            _context.Add(traveller);
            Save();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateAgentAddingTour(AgentAddingTour traveller)
        {

            _context.Entry(traveller).State = EntityState.Modified;
            Save();


        }

    }
}
