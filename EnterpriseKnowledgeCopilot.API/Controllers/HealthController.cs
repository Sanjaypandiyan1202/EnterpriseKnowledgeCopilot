using Microsoft.AspNetCore.Mvc;

namespace EnterpriseKnowledgeCopilot.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new
            {
                status = "Healthy",
                application = "Enterprise Knowledge Copilot API",
                version = "1.0"
            });
        }
    }
}
