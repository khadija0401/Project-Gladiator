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
using System.Text.Json;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class StateMinistryLoginController : ControllerBase
    {
        public StateMinistryLoginController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }

        public IConfiguration _config { get; }
        public StudentContext _context { get; }

        [AllowAnonymous]
        [HttpPost("stateMinistryLogin")]
        public IActionResult Login(StateMinistryLogin user)
        {
            var userAvailable = _context.State_Ministry_Login.Where(u => u.Username == user.Username && u.Password == user.Password).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok("Success");
            }
            return Ok("Failure");
        }

    }
}
