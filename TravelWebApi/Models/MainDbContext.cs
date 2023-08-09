using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Reflection.Emit;
using TravelWebApi.DTO;

namespace TravelWebApi.Models
{
    public class MainDbContext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public DbSet<TravellingAgent> TravelingAgents { get; set; }
        public DbSet<Traveller> Travellers { get; set; }
        public DbSet<Administration_Active_Action> AdministrationActions { get; set; }
        public DbSet<Administration_Image> AdministrationImages { get; set; }

        public DbSet<BookingClass> Bookings { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Book> Bookss { get; set; }

        public DbSet<AgentAddingTour> AgentAddingTours { get; set; }
        public MainDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BookingClass>()
         .HasOne(bc => bc.User)
         .WithMany(u => u.BookingClass)
         .HasForeignKey(bc => bc.UserId); 

            modelBuilder.Entity<BookingClass>()
                .HasOne(bc => bc.AgentAddingTour)
                .WithMany(aat => aat.BookingClass)
                .HasForeignKey(bc => bc.AgentAddingTourId); 

            modelBuilder.Entity<Feedback>()
                .HasOne(f => f.User)
                .WithMany(u => u.Feedback)
                .HasForeignKey(f => f.UserId);

           



        }
    }
}
