using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentModule.Models;
using System.Collections.Generic;
using System.Linq;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MinistryScholarshipController : ControllerBase
    {
        public MinistryScholarshipController(StudentContext context)
        {
            _context = context;
        }

        public StudentContext _context { get; }


        //Get method without id
        [HttpGet]
        public IEnumerable<MinistryScholarship> Get()
        {
            return _context.Ministry_Scholarships.ToList();
        }

        //Get method using id
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var data = _context.Ministry_Scholarships.FirstOrDefault(reg => reg.scholarshipid == id);
            if (data == null)
                return NotFound();
            else
                return Ok(data);
        }

        //Insert method
        [HttpPost]
        public ActionResult Post(MinistryScholarship reg)
        {
            _context.Ministry_Scholarships.Add(reg);
            _context.SaveChanges();
            return Ok();
        }

        //Update method
        [HttpPut("{id}")]
        [Route("UpdateReg/{id}")]
        public ActionResult Put(int id, MinistryScholarship modifiedreg)
        {
            var reg = _context.Ministry_Scholarships.FirstOrDefault(reg => reg.scholarshipid == id);
            if (reg != null)
            {
                reg.scholarshipcode = modifiedreg.scholarshipcode;
                reg.scholarshipname = modifiedreg.scholarshipname;
                reg.ministrycode = modifiedreg.ministrycode;
                reg.scholarshipdescription = modifiedreg.scholarshipdescription;
                reg.incomelimit = modifiedreg.incomelimit;
                reg.eligibility = modifiedreg.eligibility;
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        //Delete method
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var reg = _context.Ministry_Scholarships.FirstOrDefault(reg => reg.scholarshipid == id);
            if (reg == null)
                return NotFound();
            else
            {
                _context.Ministry_Scholarships.Remove(reg);
                _context.SaveChanges();
                return Ok();
            }
        }
    }
}
