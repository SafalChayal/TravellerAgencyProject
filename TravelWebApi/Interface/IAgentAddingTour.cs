using TravelWebApi.Models;

namespace TravelWebApi.Interface
{
    public interface IAgentAddingTour
    {
        public IEnumerable<AgentAddingTour> GetAgentAddingTours();

        public AgentAddingTour GetOne(int Id);

        public void InsertAgentAddingTour(AgentAddingTour agentAddingTour);

        public void UpdateAgentAddingTour(AgentAddingTour agentAddingTour);

        public AgentAddingTour DeleteAgentAddingTour(int Id);

        public void Save();


    }
}
