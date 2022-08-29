using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class AcademicDetailsScholarship
    {
        [Key]
        public int Id { get; set; }
        public int applicationid { get; set; }
        public string InstituteName { get; set; }
        public string PresentCourse { get; set; }
        public string PresentYear { get; set; }
        public string ModeOfStudy { get; set; }
        public string UniversityName { get; set; }
        public string ClassStartDate { get; set; }
        public string PreviousClass { get; set; }
        public string PreviousClassYear { get; set; }
        public string PreviousClassPercentage { get; set; }
        public DateTime RegisterTimestamp { get; set; }

    }
}
