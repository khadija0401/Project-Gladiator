using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class StudentFetch
    {

        [Key]
        public int applicationid { get; set; }

        //BASIC SCHOLARSHIP TABLE
        public string MotherName { get; set; }
        public string Religion { get; set; }
        public string Community { get; set; }
        public string FatherName { get; set; }
        public string FamAnnualIncome { get; set; }
        public string RegisterTimestamp { get; set; }

        //ACADEMIC DETAILS 
        public string InstituteName { get; set; }
        public string PresentCourse { get; set; }
        public string PresentYear { get; set; }
        public string ModeOfStudy { get; set; }
        public string UniversityName { get; set; }
        public string ClassStartDate { get; set; }
        public string PreviousClass { get; set; }
        public string PreviousClassYear { get; set; }
        public string PreviousClassPercentage { get; set; }
    
   
   
        //PERSONAL CONTACT DETAILS
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


        
        //DOCUMENT UPLOADED
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
        //public string UploadTimestamp { get; set; }


        //MARKS FEES DETAILS
        public string SscRollNo { get; set; }
        public string SscBoardName { get; set; }
        public string SscClassPercentage { get; set; }
        public string SscPassYear { get; set; }
        public string HscRollNo { get; set; }
        public string HscBoardName { get; set; }
        public string HscPassYear { get; set; }
        public string HscClassPercentage { get; set; }
        public string AdmissionFee { get; set; }
        public string TuitionFee { get; set; }
        public string OtherFee { get; set; }

        //Student Registration DETAILS

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

        //Application Status
        public string status { get; set; }

    }
}
