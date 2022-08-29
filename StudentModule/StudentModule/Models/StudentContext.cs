using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Models
{
    public class StudentContext:DbContext
    {
        public StudentContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<StudentRegistration> StudentRegistrations { get; set; }
        public DbSet<StateMinistryLogin> State_Ministry_Login { get; set; }
        public DbSet<BasicDetailsScholarship> Basic_Details_Scholarships { get; set; }
        public DbSet<AcademicDetailsScholarship> Academic_Details_Scholarships { get; set; }
        public DbSet<MarksFeesScholarship> Marks_Fees_Details_Scholarships { get; set; }
        public DbSet<PersonalContactDetailsScholarship> Personal_Contact_Details_Scholarships { get; set; }
        public DbSet<DocumentsDetailsScholarship> Documents_Details_Scholarships { get; set; }
        public DbSet<MinistryScholarship> Ministry_Scholarships { get; set; }
        public DbSet<StateLogin> State_Logins { get; set; }
        public DbSet<InstituteRegistration> Institute_Registrations { get; set; }
        public DbSet<StudentFetch> StudentFetches { get; set; }

        public DbSet<StudentFetch> StudentFetchesById { get; set; }
    }
}
