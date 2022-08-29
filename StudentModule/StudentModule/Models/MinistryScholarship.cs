using System.ComponentModel.DataAnnotations;

namespace StudentModule.Models
{
    public class MinistryScholarship
    {
        [Key]
        public int scholarshipid { get; set; }
        public string scholarshipcode { get; set; }
        public string scholarshipname { get; set; }
        public string ministrycode { get; set; }
        public string scholarshipdescription { get; set; }
        public int incomelimit { get; set; }
        public string eligibility { get; set; }
    }
}
