using TravelWebApi.Models;

namespace TravelWebApi.Interface
{
    public interface IFeedback
    {
        public IEnumerable<Feedback> GetFeedbacks();

        public Feedback GetOne(int Id);
        public void InsertFeedback(Feedback feedback);
        public void UpdateFeedback(Feedback feedback);
        public Feedback DeleteFeedback(int Id);
        public void Save();

    }
}
