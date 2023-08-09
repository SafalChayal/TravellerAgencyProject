using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AgentAddingTourController : ControllerBase
    {
        private readonly IAgentAddingTour _itraveller;

        public AgentAddingTourController(IAgentAddingTour traveller)
        {
            _itraveller = traveller;

        }

        [HttpGet]
        public IActionResult GetAgentAddingTours()
        {
            var record = _itraveller.GetAgentAddingTours();
            return Ok(record);

        }

        [HttpPost]
        public ActionResult AddAgentAddingTour(AgentAddingTour model)
        {
            if (ModelState.IsValid)
            {
                _itraveller.InsertAgentAddingTour(model);



            }
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAgentAddingTour(int id, AgentAddingTour model)
        {

            if (id != model.Tour_Id)
            {
                return BadRequest();
            }

            _itraveller.UpdateAgentAddingTour(model);

            try
            {
                _itraveller.Save();
            }
            catch (DbUpdateConcurrencyException)
            {


                throw;

            }
            return Ok(model);

        }

        [HttpGet("{id}")]
        public IActionResult GetOne(int id)
        {

            AgentAddingTour info = _itraveller.GetOne(id);
            return Ok(info);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAgentAddingTour(int id)
        {


            var user = _itraveller.GetOne(id);
            _itraveller.DeleteAgentAddingTour(id);
            return Ok(user);


        }

    }
}
