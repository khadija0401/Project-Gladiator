using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class MarksFeesScholarship
    {
        [Key]
        public int Id { get; set; }
        public int applicationid { get; set; }
        public string SscRollNo { get; set; }
        public string SscBoardName { get; set; }
        public string SscPassYear { get; set; }
        public string SscClassPercentage { get; set; }
        public string HscRollNo { get; set; }
        public string HscBoardName { get; set; }
        public string HscPassYear { get; set; }
        public string HscClassPercentage { get; set; }
        public string AdmissionFee { get; set; }
        public string TuitionFee { get; set; }
        public string OtherFee { get; set; }
        public DateTime RegisterTimestamp { get; set; }
    }
}
