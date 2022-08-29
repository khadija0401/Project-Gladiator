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
    public class StudentLoginController : ControllerBase
    {
        public StudentLoginController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }
        public IConfiguration _config { get; }
        public StudentContext _context { get; }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult StudentLogin(StudentLogin user)
        {
            var userAvailable = _context.StudentRegistrations.Where(u => u.Email == user.Email && u.PasswordSet == user.PasswordSet).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok("Student Login Success");
            }
            return Ok("Failure");
        }
    }
}
