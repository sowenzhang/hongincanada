# Hong in Canada - Personal Blog

A modern .NET 9 ASP.NET Core web application showcasing the experiences and insights of an immigrant's journey in Canada.

## Features

- **Modern Design**: Clean, responsive design with Tailwind CSS-inspired styling
- **SEO Optimized**: Comprehensive SEO features including meta tags, structured data, and sitemap
- **Home Page**: Welcome section with hero banner and feature cards
- **About Page**: Personal story and background information
- **Articles Page**: Blog posts and articles about life in Canada
- **Individual Article Pages**: Detailed articles with proper typography and navigation
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Performance Optimized**: Static file caching and optimized loading

## SEO Features

### Meta Tags & Open Graph
- Dynamic meta descriptions and keywords per page
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- Proper favicon and Apple touch icons

### Structured Data (JSON-LD)
- Person schema for the homepage
- BlogPosting schema for articles
- SoftwareApplication schema for projects
- Organization schema for education and work

### Technical SEO
- XML sitemap (`/sitemap.xml`)
- Robots.txt file (`/robots.txt`)
- Semantic HTML5 structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Cache-Control headers for static assets

### Content SEO
- Keyword-rich content
- Internal linking structure
- Article with rich content and proper formatting
- Social sharing buttons

## Technology Stack

- **.NET 9**: Latest version of .NET Core
- **ASP.NET Core Razor Pages**: Server-side rendering with Razor syntax
- **Custom CSS**: Modern styling inspired by Tailwind CSS principles
- **Clean Architecture**: Well-organized page structure and separation of concerns
- **Google Analytics**: Integrated tracking

## Getting Started

### Prerequisites

- .NET 9 SDK
- Node.js (for future Tailwind CSS integration)

### Running the Application

1. Navigate to the project directory:
   ```powershell
   cd "e:\Websites\hongincanada\HongInCanada"
   ```

2. Build the application:
   ```powershell
   dotnet build
   ```

3. Run the application:
   ```powershell
   dotnet run
   ```

4. Open your browser and navigate to `http://localhost:5094`

## Project Structure

```
HongInCanada/
├── Pages/
│   ├── Article/
│   │   ├── FirstWinter.cshtml      # Sample article page
│   │   └── FirstWinter.cshtml.cs   # Article page model
│   ├── Shared/
│   │   └── _Layout.cshtml          # Main layout template
│   ├── About.cshtml                # About page
│   ├── About.cshtml.cs             # About page model
│   ├── Articles.cshtml             # Articles listing page
│   ├── Articles.cshtml.cs          # Articles page model
│   ├── Index.cshtml                # Home page
│   └── Index.cshtml.cs             # Home page model
├── wwwroot/
│   ├── css/
│   │   ├── input.css               # Tailwind CSS input file
│   │   └── site.css                # Compiled CSS with custom styles
│   └── js/
│       └── site.js                 # JavaScript files
├── Properties/
│   └── launchSettings.json         # Development settings
├── Program.cs                      # Application entry point
├── HongInCanada.csproj             # Project file
├── package.json                    # NPM configuration for Tailwind
├── tailwind.config.js              # Tailwind CSS configuration
└── README.md                       # This file
```

## Pages

### Home Page (`/`)
- Hero section with welcoming message
- Feature cards highlighting different aspects of the blog
- Modern gradient background and clean typography

### About Page (`/About`)
- Personal story and background
- Information about the author's journey
- Call-to-action to explore articles

### Articles Page (`/Articles`)
- List of blog posts and articles
- Featured article section
- Preview of article content with links to full posts

### Individual Articles (`/Article/[slug]`)
- Full article content with proper typography
- Navigation back to articles list
- Clean, readable layout optimized for long-form content

## Future Enhancements

- **Full Tailwind CSS Integration**: Complete setup with PostCSS and build pipeline
- **Content Management System**: Dynamic article loading from database
- **Search Functionality**: Article search and filtering
- **Comments System**: Reader engagement features
- **Newsletter Signup**: Email subscription functionality
- **Social Media Integration**: Sharing and social links
- **SEO Optimization**: Meta tags, structured data, and performance optimization

## Customization

The application uses custom CSS that mimics Tailwind CSS utility classes. Key styling features include:

- **Responsive Grid System**: Flexible layouts that adapt to different screen sizes
- **Modern Typography**: Clean, readable fonts and proper text hierarchy
- **Color Palette**: Professional blue and gray color scheme
- **Interactive Elements**: Hover effects and smooth transitions
- **Card Components**: Reusable card layouts for content organization

## Contributing

This is a personal blog project, but feedback and suggestions are welcome!

## License

This project is for educational and personal use.
