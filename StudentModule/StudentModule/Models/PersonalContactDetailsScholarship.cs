using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class PersonalContactDetailsScholarship
    {
        [Key]
        public int Id { get; set; }
        public int applicationid { get; set; }
        public string IsDisabled { get; set; }
        public string TypeOfDisability { get; set; }
        public string PercentageOfDisability { get; set; }
        public string MaritalStatus { get; set; }
        public string ParentsProffession { get; set; }
        public string ContactState { get; set; }
        public string ContactDistrict { get; set; }
        public string ContactBlock { get; set; }
        public string HouseNumber { get; set; }
        public string StreetNumber { get; set; }
        public string PinNumber { get; set; }
        public string ChooseScheme { get; set; }
        public DateTime RegisterTimestamp { get; set; }
    }
}
