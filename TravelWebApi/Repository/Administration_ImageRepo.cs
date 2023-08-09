using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Repository
{
    public class Administration_ImageRepo:IAdministration_Image
    {
        private readonly MainDbContext _context;


        public Administration_ImageRepo(MainDbContext context)
        {
            _context = context;
        }

        public Administration_Image DeleteAdministration_Image(int Id)
        {
            Administration_Image record = _context.AdministrationImages.Find(Id);
            if (record == null)
            {
                return null;
            }
            _context.AdministrationImages.Remove(record);
            Save();
            return record;
        }

        public Administration_Image GetOne(int Id)
        {


            return _context.AdministrationImages.Find(Id);
        }

        public IEnumerable<Administration_Image> GetAdministration_Images()
        {
            return _context.AdministrationImages.ToList();
        }

        public void InsertAdministration_Image(Administration_Image traveller)
        {
            _context.Add(traveller);
            Save();
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateAdministration_Image(Administration_Image traveller)
        {

            _context.Entry(traveller).State = EntityState.Modified;
            Save();


        }

    }
}
