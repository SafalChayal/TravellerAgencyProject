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
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedback _itraveller;

        public FeedbackController(IFeedback traveller)
        {
            _itraveller = traveller;

        }

        [HttpGet]
        public IActionResult GetFeedbacks()
        {
            var record = _itraveller.GetFeedbacks();
            return Ok(record);

        }

        [HttpPost]
        public ActionResult AddFeedback(Feedback model)
        {
            if (ModelState.IsValid)
            {
                _itraveller.InsertFeedback(model);



            }
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateFeedback(int id, Feedback model)
        {

            if (id != model.Feedback_Id)
            {
                return BadRequest();
            }

            _itraveller.UpdateFeedback(model);

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

            Feedback info = _itraveller.GetOne(id);
            return Ok(info);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFeedback(int id)
        {


            var user = _itraveller.GetOne(id);
            _itraveller.DeleteFeedback(id);
            return Ok(user);


        }

    }
}
