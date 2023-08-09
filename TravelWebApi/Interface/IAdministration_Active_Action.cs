using TravelWebApi.Models;

namespace TravelWebApi.Interface
{
    public interface IAdministration_Active_Action
    {
        public IEnumerable<Administration_Active_Action> GetAdministration_Active_Action();

        public Administration_Active_Action GetOne(int Id);

        public void InsertAdministration_Active_Action(Administration_Active_Action administration_Active_Action);

        public void UpdateAdministration_Active_Action(Administration_Active_Action administration_Active_Action);

        public Administration_Active_Action DeleteAdministration_Active_Action(int Id);

        public void Save();

    }
}
