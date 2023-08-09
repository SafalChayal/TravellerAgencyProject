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
    public class TravellingAgentController : ControllerBase
    {
        private readonly ITravellingAgent _itraveller;

        public TravellingAgentController(ITravellingAgent traveller)
        {
            _itraveller = traveller;

        }

        [HttpGet]
        public IActionResult GetAllTravellingAgent()
        {
            var record = _itraveller.GetTravellingAgent();
            return Ok(record);

        }

        [HttpPost]
        public ActionResult AddTravellingAgent(TravellingAgent model)
        {
            if (ModelState.IsValid)
            {
                _itraveller.InsertTravellingAgent(model);



            }
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTravellingAgent(int id, TravellingAgent model)
        {

            if (id != model.TravellingAgent_Id)
            {
                return BadRequest();
            }

            _itraveller.UpdateTravellingAgent(model);

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
        public IActionResult GetOneTravellingAgent(int id)
        {

            TravellingAgent info = _itraveller.GetByIdTravellingAgent(id);
            return Ok(info);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTravellingAgent(int id)
        {


            var user = _itraveller.GetByIdTravellingAgent(id);
            _itraveller.DeleteTravellingAgent(id);
            return Ok(user);


        }

    }
}
