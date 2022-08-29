using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StudentModule.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScholarshipController : ControllerBase
    {
        /// <summary>
        /// Student Context Connection
        /// </summary>
        /// <param name="config"></param>
        /// <param name="context"></param>
        public ScholarshipController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }

        public IConfiguration _config { get; }
        public StudentContext _context { get; }
        /// <summary>
        /// Posting Basic Details
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>

        [AllowAnonymous]
        [HttpPost("BasicDetails")]
        public IActionResult BasicDetails(BasicDetailsScholarship user)
        {
           
            user.RegisterTimestamp = DateTime.Now;
            _context.Basic_Details_Scholarships.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }
        [AllowAnonymous]
        [HttpPost("AcademicDetails")]
        public IActionResult AcademicDetails(AcademicDetailsScholarship user)
        {
            //if (_context.StudentRegistrations.Where(u => u.ApplicationId == user.ApplicationId).FirstOrDefault() != null)
            //{
            //    return Ok("Already Exist");
            //}
            user.RegisterTimestamp = DateTime.Now;
            _context.Academic_Details_Scholarships.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }
        [AllowAnonymous]
        [HttpPost("MarksFeesDetails")]
        public IActionResult MarksFeesDetails(MarksFeesScholarship user)
        {
            //if (_context.StudentRegistrations.Where(u => u.ApplicationId == user.ApplicationId).FirstOrDefault() != null)
            //{
            //    return Ok("Already Exist");
            //}
            user.RegisterTimestamp = DateTime.Now;
            _context.Marks_Fees_Details_Scholarships.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }
        [AllowAnonymous]
        [HttpPost("PersonalContactDetails")]
        public IActionResult PersonalContactDetails(PersonalContactDetailsScholarship user)
        {
            //if (_context.StudentRegistrations.Where(u => u.ApplicationId == user.ApplicationId).FirstOrDefault() != null)
            //{
            //    return Ok("Already Exist");
            //}
            user.RegisterTimestamp = DateTime.Now;
            _context.Personal_Contact_Details_Scholarships.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }
        [AllowAnonymous]
        [HttpPost("DocumentsDetails")]
        public IActionResult DocumentsDetails(DocumentsDetailsScholarship user)
        {
            //if (_context.StudentRegistrations.Where(u => u.ApplicationId == user.ApplicationId).FirstOrDefault() != null)
            //{
            //    return Ok("Already Exist");
            //}
            //user.UploadTimestamp = DateTime.Now;
            user.status = "applied";
            _context.Documents_Details_Scholarships.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }


    }
}
