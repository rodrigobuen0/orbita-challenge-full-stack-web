using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Name)
                    .IsRequired();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.RA)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.CPF)
                    .IsRequired()
                    .HasMaxLength(11);

                entity.HasIndex(e => e.RA)
                    .IsUnique();

                entity.HasIndex(e => e.CPF);
                entity.HasIndex(e => e.Email);
            });
        }
    }
}
