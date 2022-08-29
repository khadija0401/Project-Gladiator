using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentModule.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        public StudentsController(StudentContext context)
        {
            _context = context;
        }
        //read-only prop
        public StudentContext _context { get; }
        //Get method without id
        [HttpGet]
        public ActionResult<IEnumerable<StudentFetch>> Get()
        {
            var data = _context.StudentFetches.FromSqlInterpolated($"dbo.Scholarship_Procedure");
            return Ok(data);
        }

        //Get method using id institute
        [HttpGet("{id}")]
        //[Route("GetById/{id}")]
        public ActionResult GetById(int id)
        {
            var data = _context.StudentFetchesById.FromSqlInterpolated($"dbo.Scholarship_GetById_Procedure {id}");
            if (data == null)
                return NotFound();
            else
                return Ok(data);
        }

        //put method to change status of institute application
        [HttpPut("{id}")]
        [Route("ApplicationStatus/{id}")]
        public ActionResult ApplicationStatus(int id, DocumentsDetailsScholarship model)
        {

            var reg = _context.Documents_Details_Scholarships.FirstOrDefault(reg => reg.applicationid == id);
            if (reg != null)
            {
                reg.status = model.status;
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
