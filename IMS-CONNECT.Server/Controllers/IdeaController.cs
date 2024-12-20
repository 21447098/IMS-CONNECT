using IMSConnect.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace IMSConnect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdeaController : ControllerBase
    {
        private static List<Idea> ideas = new List<Idea>();

        [HttpGet]
        public IEnumerable<Idea> GetIdeas()
        {
            return ideas;
        }

        [HttpPost]
        public IActionResult SubmitIdea([FromBody] Idea idea)
        {
            idea.Id = ideas.Count + 1;
            idea.Status = "Submitted";
            idea.Timestamp = System.DateTime.Now;
            ideas.Add(idea);
            return Ok(idea);
        }
    }
}

