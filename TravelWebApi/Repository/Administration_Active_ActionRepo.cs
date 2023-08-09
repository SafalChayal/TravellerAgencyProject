using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Repository
{
    public class Administration_Active_ActionRepo: IAdministration_Active_Action
    {
        private readonly MainDbContext _context;


        public Administration_Active_ActionRepo(MainDbContext context)
        {
            _context = context;
        }

        public Administration_Active_Action DeleteAdministration_Active_Action(int Id)
        {
            Administration_Active_Action record = _context.AdministrationActions.Find(Id);
            if (record == null)
            {
                return null;
            }
            _context.AdministrationActions.Remove(record);
            Save();
            return record;
        }

        public Administration_Active_Action GetOne(int Id)
        {


            return _context.AdministrationActions.Find(Id);
        }

        public IEnumerable<Administration_Active_Action> GetAdministration_Active_Action()
        {
            return _context.AdministrationActions.ToList();
        }

        public void InsertAdministration_Active_Action(Administration_Active_Action traveller)
        {
            _context.Add(traveller);
            Save();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateAdministration_Active_Action(Administration_Active_Action traveller)
        {

            _context.Entry(traveller).State = EntityState.Modified;
            Save();


        }
    }
}
