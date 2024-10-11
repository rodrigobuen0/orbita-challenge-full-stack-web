using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(10)]
        public string RA { get; set; }

        [Required]
        [StringLength(11)]
        public string CPF { get; set; }
    }

}
