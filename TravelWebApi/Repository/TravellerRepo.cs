using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Repository
{
    public class TravellerRepo:ITraveller
    {
        private readonly MainDbContext _context;

       
        public TravellerRepo(MainDbContext context)
        {
            _context = context;
        }

        public Traveller DeleteTraveller(int Id)
        {
            Traveller record = _context.Travellers.Find(Id);
            if (record == null)
            {
                return null;
            }
            _context.Travellers.Remove(record);
            Save();
            return record;
        }

        public Traveller GetById(int Id)
        {


            return _context.Travellers.Find(Id); 
        }

        public IEnumerable<Traveller> GetTravellers()
        {
            return _context.Travellers.ToList();
        }

        public void Insert(Traveller traveller)
        {
            _context.Add(traveller);
            Save();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateTraveller(Traveller traveller)
        {

            _context.Entry(traveller).State = EntityState.Modified;
            Save();
            

        }
    }
}
