using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelWebApi.Models;

namespace TravelWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingClassesController : ControllerBase
    {
        private readonly MainDbContext _context;

        public BookingClassesController(MainDbContext context)
        {
            _context = context;
        }

        // GET: api/BookingClasses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookingClass>>> GetBookings()
        {
          if (_context.Bookings == null)
          {
              return NotFound();
          }
            return await _context.Bookings.ToListAsync();
        }

        // GET: api/BookingClasses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookingClass>> GetBookingClass(int id)
        {
          if (_context.Bookings == null)
          {
              return NotFound();
          }
            var bookingClass = await _context.Bookings.FindAsync(id);

            if (bookingClass == null)
            {
                return NotFound();
            }

            return bookingClass;
        }

        // PUT: api/BookingClasses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookingClass(int id, BookingClass bookingClass)
        {
            if (id != bookingClass.Booking_Id)
            {
                return BadRequest();
            }

            _context.Entry(bookingClass).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingClassExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BookingClasses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BookingClass>> PostBookingClass(BookingClass bookingClass)
        {
          if (_context.Bookings == null)
          {
              return Problem("Entity set 'MainDbContext.Bookings'  is null.");
          }
            _context.Bookings.Add(bookingClass);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookingClass", new { id = bookingClass.Booking_Id }, bookingClass);
        }

        // DELETE: api/BookingClasses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookingClass(int id)
        {
            if (_context.Bookings == null)
            {
                return NotFound();
            }
            var bookingClass = await _context.Bookings.FindAsync(id);
            if (bookingClass == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(bookingClass);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookingClassExists(int id)
        {
            return (_context.Bookings?.Any(e => e.Booking_Id == id)).GetValueOrDefault();
        }
    }
}
