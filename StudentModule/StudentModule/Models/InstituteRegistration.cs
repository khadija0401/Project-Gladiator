using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class InstituteRegistration
    {
        [Key]
        public int instId { get; set; }
        public string Institute_Category { get; set; }
        public string Institute_Name { get; set; }
        public string Institute_State { get; set; }
        public string Institute_District { get; set; }
        public int institute_Code { get; set; }
        public string Dise_Code { get; set; }
        public string Location { get; set; }
        public string Institute_Type { get; set; }
        public string Affiliated_Uni_State { get; set; }
        public string Affiliated_Uni_Name { get; set; }
        public string Year_Admission_Start { get; set; }
        public string Set_Password { get; set; }
        public string Institute_Est_Certificate { get; set; }
        public string University_Certificate { get; set; }
        public string Address_1 { get; set; }
        public string Address_2 { get; set; }
        public string City { get; set; }
        public string Address_State { get; set; }
        public string Address_District { get; set; }
        public string Address_Pincode { get; set; }

        public string Principle_Name { get; set; }
        public string Principle_MobileNo { get; set; }

        public string status { get; set; }
    }
}
