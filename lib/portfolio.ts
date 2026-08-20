export type PortfolioProject = {
  name: string;
  type: string;
  url: string;
  domain: string;
  image: string;
  alt: string;
  summary: string;
  highlights: readonly string[];
  homeFeatured?: boolean;
  homeOrder?: number;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  { name:"Sun Direct Renewable", type:"Solar energy website", url:"https://sundirect.ca/", domain:"sundirect.ca", image:"/portfolio/sun-direct.webp", alt:"Sun Direct Renewable website homepage for Alberta solar services", summary:"A conversion-led solar platform for Alberta homes, businesses, and farms, connecting service discovery with a clear proposal journey.", highlights:["Multi-service architecture","Proposal-focused UX","Local search content"], homeFeatured:true, homeOrder:1 },
  { name:"Ultra Roofer Peak Authority", type:"Roofing service website", url:"https://ultra-roofer.vercel.app/", domain:"ultra-roofer.vercel.app", image:"/portfolio/ultra-roofer.webp", alt:"Ultra Roofer Peak Authority Los Angeles roofing website homepage", summary:"A high-contrast Los Angeles roofing website that frames inspections, repairs, and replacements around clear scope, documented work, and fast contact.", highlights:["Inspection-first funnel","Service-area positioning","24-hour contact path"], homeFeatured:true, homeOrder:4 },
  { name:"BrightSmile Dental", type:"Dental practice website", url:"https://brightsmile-dental-sigma.vercel.app/", domain:"brightsmile-dental-sigma.vercel.app", image:"/portfolio/brightsmile-dental.webp", alt:"BrightSmile Dental modern dental practice website homepage", summary:"A calm, patient-first dental website that pairs modern clinical care with clear appointment paths and reassuring proof.", highlights:["Appointment-focused UX","Trust-led presentation","Service clarity"] },
  { name:"BrightNest Cleaning", type:"Local service website", url:"https://brightnest-silk.vercel.app/", domain:"brightnest-silk.vercel.app", image:"/portfolio/socal-cleaning.webp", alt:"BrightNest Cleaning website homepage", summary:"A warm, trust-first cleaning website that makes services, coverage, and quote requests easy to understand on any screen.", highlights:["Fast quote journey","Service-area messaging","Mobile-first contact"], homeFeatured:true, homeOrder:3 },
  { name:"Sugar In The Morning", type:"Residential cleaning website", url:"https://sugar-in-the-morning.vercel.app/", domain:"sugar-in-the-morning.vercel.app", image:"/portfolio/sugar-in-the-morning.webp", alt:"Sugar In The Morning cleaning service website homepage", summary:"A warm editorial brand experience for a San Angelo cleaning service, balancing personality with a direct path to request a quote.", highlights:["Distinctive brand direction","Service clarity","Call and quote paths"] },
  { name:"SunnyCells", type:"Ecommerce wellness website", url:"https://demo-ryze.vercel.app/", domain:"demo-ryze.vercel.app", image:"/portfolio/sunnycells.webp", alt:"SUNNYCELLS Metabolic Morning Blend ecommerce website homepage", summary:"A warm, conversion-focused supplement storefront that turns a daily wellness product into a clear, repeatable morning ritual.", highlights:["Product-led art direction","Subscription-focused CTA","Ingredient storytelling"], homeFeatured:true, homeOrder:2 },
  { name:"Face Shape Detector", type:"Privacy-first AI tool", url:"https://faceshapedetector.online/", domain:"faceshapedetector.online", image:"/portfolio/face-shape-detector.webp", alt:"Free Face Shape Detector website and photo analysis interface", summary:"A guided browser-based tool that helps visitors estimate their face shape and explore practical, search-friendly style guidance.", highlights:["Guided photo analysis","Privacy-first experience","Content library"] },
  { name:"Carspect", type:"AI automotive estimator", url:"https://carspect.pro/", domain:"carspect.pro", image:"/portfolio/carspect.webp", alt:"Carspect car body repair estimate calculator homepage", summary:"A photo-guided repair calculator that turns visible vehicle damage into an itemized preliminary cost range and readable report.", highlights:["Multi-step estimator","Itemized cost logic","Downloadable reports"] },
];
