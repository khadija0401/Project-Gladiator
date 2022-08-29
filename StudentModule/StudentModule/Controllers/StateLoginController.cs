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
    public class StateLoginController : ControllerBase
    {
        public StateLoginController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }

        public IConfiguration _config { get; }
        public StudentContext _context { get; }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult Login(StateLogin user)
        {
            var userAvailable = _context.State_Logins.Where(u => u.Username == user.Username && u.Password == user.Password).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok("Success");
            }
            return Ok("Failure");
        }
    }
}
