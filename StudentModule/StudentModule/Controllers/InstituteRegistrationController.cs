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
    public class InstituteRegistrationController : ControllerBase
    {
        private readonly IConfiguration _config;
        public readonly StudentContext _context;
        public InstituteRegistrationController(IConfiguration config, StudentContext context)
        {
            _config = config;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("Create")]
        public IActionResult Create([FromBody] InstituteRegistration user)
        {
            if (_context.Institute_Registrations.FirstOrDefault(u => u.institute_Code == user.institute_Code) != null)
            {
                return Ok("Already Exist institute");
            }

            var model = new InstituteRegistration();
            model.Institute_Category = user.Institute_Category;
            model.Institute_Name = user.Institute_Name;
            model.Institute_State = user.Institute_State;
            model.Institute_District = user.Institute_District;
            model.institute_Code = user.institute_Code;
            model.Dise_Code = user.Dise_Code;
            model.Location = user.Location;
            model.Institute_Type = user.Institute_Type;
            model.Affiliated_Uni_State = user.Affiliated_Uni_State;
            model.Affiliated_Uni_Name = user.Affiliated_Uni_Name;
            model.Year_Admission_Start = user.Year_Admission_Start;
            model.Set_Password = user.Set_Password;
            model.Institute_Est_Certificate = user.Institute_Est_Certificate;
            model.University_Certificate = user.University_Certificate;
            model.Address_1 = user.Address_1;
            model.Address_2 = user.Address_2;
            model.City = user.City;
            model.Address_State = user.Address_State;
            model.Address_District = user.Address_District;
            model.Address_Pincode = user.Address_Pincode;
            model.Principle_Name = user.Principle_Name;
            model.Principle_MobileNo = user.Principle_MobileNo;

            model.status = "applied";

            _context.Institute_Registrations.Add(model);
            _context.SaveChanges();

            return Ok(model);
        }
    }
}
