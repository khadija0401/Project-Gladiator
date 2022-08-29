using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class DocumentsDetailsScholarship
    {
        
        
        [Key]
        public int applicationid { get; set; }
        public string DomicileCertificate { get; set; }
        public string StudentPhoto { get; set; }
        public string InstituteIdCard { get; set; }
        public string PreviousYearMarksheet { get; set; }
        public string FeeReceipt { get; set; }
        public string BankPassbook { get; set; }
        public string AadharCard { get; set; }
        public string SscMarksheet { get; set; }
        public string HscMarksheet { get; set; }
        public string IncomeCertificate { get; set; }
        //public DateTime UploadTimestamp { get; set; }
        public string status { get; set; }
    }
}
