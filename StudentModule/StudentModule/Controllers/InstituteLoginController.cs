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
    public class InstituteLoginController : ControllerBase
    {
        public InstituteLoginController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }
        public IConfiguration _config { get; }
        public StudentContext _context { get; }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult InstituteLogin(InstituteLogin user)
        {
            var userAvailable = _context.Institute_Registrations.Where(u => u.institute_Code == user.institute_Code && u.Set_Password == user.Set_Password).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok("Institute Login Success!");
            }
            return Ok("Failure");
        }
    }
}
