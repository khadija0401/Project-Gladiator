using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class StudentRegistration
    {
        [Key]
        public int Id { get; set; }
        public int applicationid { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Name { get; set; }
        public string Dob { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public int InstituteCode { get; set; }
        public string AadharNo { get; set; }
        public string BankIfsc { get; set; }
        public string BankAccNo { get; set; }
        public string BankName { get; set; }
        public string PasswordSet { get; set; }

    }
}
