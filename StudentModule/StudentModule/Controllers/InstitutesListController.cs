using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentModule.Models;
using System.Collections.Generic;
using System.Linq;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstitutesListController : ControllerBase
    {
        public InstitutesListController(StudentContext context)
        {
            _context = context;
        }

        //read-only property
        public StudentContext _context { get; }

        //get all institute list
        [HttpGet]
        public IEnumerable<InstituteRegistration> Get()
        {
            return _context.Institute_Registrations.ToList();
        }

        //Get method using id institute
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var data = _context.Institute_Registrations.FirstOrDefault(reg => reg.institute_Code == id);
            if (data == null)
                return NotFound();
            else
                return Ok(data);
        }

        //put method to change status of institute application
        [HttpPut("{id}")]
        [Route("Status/{id}")]
        public ActionResult Put(int id, InstituteRegistration modi)
        {

            var reg = _context.Institute_Registrations.FirstOrDefault(reg => reg.institute_Code == id);
            if (reg != null)
            {
                reg.status = modi.status;
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
