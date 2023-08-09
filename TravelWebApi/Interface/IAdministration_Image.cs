using TravelWebApi.Models;

namespace TravelWebApi.Interface
{
    public interface IAdministration_Image
    {
        public IEnumerable<Administration_Image> GetAdministration_Images();

        public Administration_Image GetOne(int Id);

        public void InsertAdministration_Image(Administration_Image Administration_Image);

        public void UpdateAdministration_Image(Administration_Image Administration_Image);

        public Administration_Image DeleteAdministration_Image(int Id);

        public void Save();



    }
}
