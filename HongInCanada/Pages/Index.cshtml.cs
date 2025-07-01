using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace HongInCanada.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        // SEO Meta Data
        ViewData["Title"] = "Home";
        ViewData["Description"] = "Hong - Engineering Manager with a passion for building products that people love. Canadian/Chinese with a background in HCI, table tennis enthusiast, and cat lover.";
        ViewData["Keywords"] = "Hong, Engineering Manager, Product Builder, HCI, Human Computer Interaction, Canada, Seattle metro, Table Tennis, Software Engineer, Minibreaks, Founder";
        ViewData["CanonicalUrl"] = "https://hongincanada.com";
        ViewData["OgImage"] = "https://hongincanada.com/images/profile.png";
    }
}
