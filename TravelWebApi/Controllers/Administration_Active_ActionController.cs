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
    public class Administration_Active_ActionController : ControllerBase
    {
        private readonly IAdministration_Active_Action _itraveller;

        public Administration_Active_ActionController(IAdministration_Active_Action traveller)
        {
            _itraveller = traveller;

        }

        [HttpGet]
        public IActionResult GetAdministration_Active_Action()
        {
            var record = _itraveller.GetAdministration_Active_Action();
            return Ok(record);

        }

        [HttpPost]
        public ActionResult AddAdministration_Active_Action(Administration_Active_Action model)
        {
            if (ModelState.IsValid)
            {
                _itraveller.InsertAdministration_Active_Action(model);



            }
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAdministration_Active_Action(int id, Administration_Active_Action model)
        {

            if (id != model.Id)
            {
                return BadRequest();
            }

            _itraveller.UpdateAdministration_Active_Action(model);

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

            Administration_Active_Action info = _itraveller.GetOne(id);
            return Ok(info);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAdministration_Active_Action(int id)
        {


            var user = _itraveller.GetOne(id);
            _itraveller.DeleteAdministration_Active_Action(id);
            return Ok(user);


        }
    }
}
