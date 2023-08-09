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
    
    public class Administration_ImageController : ControllerBase
    {
        private readonly IAdministration_Image _itraveller;

        public Administration_ImageController(IAdministration_Image traveller)
        {
            _itraveller = traveller;

        }

        [HttpGet]
        public IActionResult GetAdministration_Image()
        {
            var record = _itraveller.GetAdministration_Images();
            return Ok(record);

        }

        [HttpPost]
        public ActionResult AddAdministration_Image(Administration_Image model)
        {
            if (ModelState.IsValid)
            {
                _itraveller.InsertAdministration_Image(model);



            }
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAdministration_Image(int id, Administration_Image model)
        {

            if (id != model.Id)
            {
                return BadRequest();
            }

            _itraveller.UpdateAdministration_Image(model);

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

            Administration_Image info = _itraveller.GetOne(id);
            return Ok(info);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAdministration_Image(int id)
        {


            var user = _itraveller.GetOne(id);
            _itraveller.DeleteAdministration_Image(id);
            return Ok(user);


        }

    }
}
