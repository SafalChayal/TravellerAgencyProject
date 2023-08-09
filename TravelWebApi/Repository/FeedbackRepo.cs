using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Repository
{
    public class FeedbackRepo:IFeedback
    {
        private readonly MainDbContext _context;


        public FeedbackRepo(MainDbContext context)
        {
            _context = context;
        }

        public Feedback DeleteFeedback(int Id)
        {
            Feedback record = _context.Feedbacks.Find(Id);
            if (record == null)
            {
                return null;
            }
            _context.Feedbacks.Remove(record);
            Save();
            return record;
        }

        public Feedback GetOne(int Id)
        {


            return _context.Feedbacks.Find(Id);
        }

        public IEnumerable<Feedback> GetFeedbacks()
        {
            return _context.Feedbacks.ToList();
        }

        public void InsertFeedback(Feedback traveller)
        {
            _context.Add(traveller);
            Save();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateFeedback(Feedback traveller)
        {

            _context.Entry(traveller).State = EntityState.Modified;
            Save();


        }
    }
}
