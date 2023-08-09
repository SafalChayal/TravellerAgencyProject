using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelWebApi.DTO;
using TravelWebApi.Models;

namespace TravelWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class AgentController : ControllerBase
    {
        private readonly MainDbContext _context;

        public AgentController(MainDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAgents()
        {
            var agents = _context.Users.Where(u => u.Role == "Agent").ToList();
            return Ok(agents);
        }

        [HttpGet("{id}")]
        public IActionResult GetAgent(int id)
        {
            var agent = _context.Users.FirstOrDefault(u => u.UserId == id && u.Role == "Agent");
            if (agent == null)
            {
                return NotFound();
            }

            return Ok(agent);
        }

        [HttpPost]
        public IActionResult CreateAgent(User agent)
        {
            if (agent.Role != "Agent")
            {
                return BadRequest("Invalid role for agent.");
            }

            _context.Users.Add(agent);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetAgent), new { id = agent.UserId }, agent);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAgent(int id, User updatedAgent)
        {
            if (updatedAgent.Role != "Agent")
            {
                return BadRequest("Invalid role for agent.");
            }

            var agent = _context.Users.FirstOrDefault(u => u.UserId == id && u.Role == "Agent");
            if (agent == null)
            {
                return NotFound();
            }

            agent.UserName = updatedAgent.UserName;
            agent.UserEmail = updatedAgent.UserEmail;
            agent.Password = updatedAgent.Password;
            agent.Status=updatedAgent.Status;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAgent(int id)
        {
            var agent = _context.Users.FirstOrDefault(u => u.UserId == id && u.Role == "Agent");
            if (agent == null)
            {
                return NotFound();
            }

            _context.Users.Remove(agent);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
