using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelWebApi.Interface;
using TravelWebApi.Models;

namespace TravelWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class TravellerController : ControllerBase
    {
        private readonly ITraveller _itraveller;

        public TravellerController(ITraveller traveller)
        {
            _itraveller = traveller;

        }

        [HttpGet]
        public  IActionResult GetAllTravellers()
        {
            var record  = _itraveller.GetTravellers();
             return  Ok(record);

        }

        [HttpPost]
        public ActionResult AddTraveller(Traveller model)
        {
            if (ModelState.IsValid)
            {
                _itraveller.Insert(model);
               


            }
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTraveller(int id,Traveller model) {

            if (id != model.Traveller_Id)
            {
                return BadRequest();
            }

            _itraveller.UpdateTraveller(model);

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

            Traveller info = _itraveller.GetById(id);
            return Ok(info);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTraveller(int id)
        {


            var user = _itraveller.GetById(id);
            _itraveller.DeleteTraveller(id);
            return Ok(user);


        }
    }
}
