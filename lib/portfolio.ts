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
};

export const portfolioProjects: readonly PortfolioProject[] = [
  { name:"Sun Direct Renewable", type:"Solar energy website", url:"https://sundirect.ca/", domain:"sundirect.ca", image:"/portfolio/sun-direct.webp", alt:"Sun Direct Renewable website homepage for Alberta solar services", summary:"A conversion-led solar platform for Alberta homes, businesses, and farms, connecting service discovery with a clear proposal journey.", highlights:["Multi-service architecture","Proposal-focused UX","Local search content"], homeFeatured:true },
  { name:"SoCal Cleaning Company", type:"Local service website", url:"https://socal-cleaning.vercel.app/", domain:"socal-cleaning.vercel.app", image:"/portfolio/socal-cleaning.webp", alt:"SoCal Cleaning Company website homepage", summary:"A bright, trust-first cleaning website that makes services, coverage, and quote requests easy to understand on any screen.", highlights:["Fast quote journey","Service-area messaging","Mobile-first contact"], homeFeatured:true },
  { name:"Sugar In The Morning", type:"Residential cleaning website", url:"https://sugar-in-the-morning.vercel.app/", domain:"sugar-in-the-morning.vercel.app", image:"/portfolio/sugar-in-the-morning.webp", alt:"Sugar In The Morning cleaning service website homepage", summary:"A warm editorial brand experience for a San Angelo cleaning service, balancing personality with a direct path to request a quote.", highlights:["Distinctive brand direction","Service clarity","Call and quote paths"] },
  { name:"Face Shape Detector", type:"Privacy-first AI tool", url:"https://faceshapedetector.online/", domain:"faceshapedetector.online", image:"/portfolio/face-shape-detector.webp", alt:"Free Face Shape Detector website and photo analysis interface", summary:"A guided browser-based tool that helps visitors estimate their face shape and explore practical, search-friendly style guidance.", highlights:["Guided photo analysis","Privacy-first experience","Content library"] },
  { name:"Carspect", type:"AI automotive estimator", url:"https://carspect.pro/", domain:"carspect.pro", image:"/portfolio/carspect.webp", alt:"Carspect car body repair estimate calculator homepage", summary:"A photo-guided repair calculator that turns visible vehicle damage into an itemized preliminary cost range and readable report.", highlights:["Multi-step estimator","Itemized cost logic","Downloadable reports"], homeFeatured:true },
  { name:"BIBIBOP Nutrition Calculator", type:"Interactive nutrition platform", url:"https://bibibopnutritioncalculator.pro/", domain:"bibibopnutritioncalculator.pro", image:"/portfolio/bibibop-nutrition-calculator.webp", alt:"BIBIBOP Nutrition Calculator bowl builder interface", summary:"An ingredient-level bowl builder that calculates calories, macros, sodium, and allergens as customers assemble their meal.", highlights:["Live nutrition totals","Allergen visibility","Search-led content"] },
  { name:"Taksi Ücreti Hesaplama", type:"Fare calculator and content platform", url:"https://taksiucreti-hesaplama.blog/", domain:"taksiucreti-hesaplama.blog", image:"/portfolio/taksi-ucreti-hesaplama.webp", alt:"Taksi Ücreti Hesaplama city fare calculator homepage", summary:"A Turkish fare-calculation platform that turns city tariff data into clear journey estimates, source records, and local guides.", highlights:["81-city calculator","Source-aware data","Scalable local pages"] },
];
