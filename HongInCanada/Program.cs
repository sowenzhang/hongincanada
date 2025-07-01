var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

// SEO-friendly URL rewriting
app.UseRouting();

app.UseAuthorization();

// Serve static files with proper cache headers for SEO
app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
    {
        // Cache static assets for 1 year for better performance
        if (ctx.Context.Request.Path.StartsWithSegments("/css") ||
            ctx.Context.Request.Path.StartsWithSegments("/js") ||
            ctx.Context.Request.Path.StartsWithSegments("/images"))
        {
            ctx.Context.Response.Headers.CacheControl = "public,max-age=31536000";
        }
    }
});

app.MapStaticAssets();
app.MapRazorPages()
   .WithStaticAssets();

app.Run();
