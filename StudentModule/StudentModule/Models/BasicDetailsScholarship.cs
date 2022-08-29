using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class BasicDetailsScholarship
    {
        [Key]
        public int Id { get; set; }

        public int applicationid { get; set; }
        public string Religion { get; set; }
        public string Community { get; set; }
        public string FatherName { get; set; }

        public string MotherName { get; set; }
        public string FamAnnualIncome { get; set; }
        public DateTime RegisterTimestamp { get; set; }

    }
}
