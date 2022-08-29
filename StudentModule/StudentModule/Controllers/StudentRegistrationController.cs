using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
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
    [EnableCors("AllowOrigin")]
    public class StudentRegistrationController : ControllerBase
    {
        public StudentRegistrationController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }

        public IConfiguration _config { get; }
        public StudentContext _context { get; }

        [AllowAnonymous]
        [HttpPost("CreateUser")]
        public IActionResult Create(StudentRegistration user)
        {
            if (_context.StudentRegistrations.Where(u => u.applicationid == user.applicationid).FirstOrDefault() != null)
            {
                return Ok("Already Exist");
            }
            _context.StudentRegistrations.Add(user);
            _context.SaveChanges();
            return Ok("Success");
        }
    }
}
