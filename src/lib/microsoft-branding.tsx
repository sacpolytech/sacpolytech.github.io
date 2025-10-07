/**
 * Microsoft Brand Colors and Assets
 *
 * Official Microsoft product colors and branding assets.
 * For production use, replace placeholder URLs with official assets
 * from Microsoft Partner Network portal.
 */

export const MicrosoftColors = {
  // Core Microsoft Brand
  microsoftBlue: '#00A4EF',
  microsoftGreen: '#7FBA00',
  microsoftOrange: '#F25022',
  microsoftYellow: '#FFB900',

  // Product-Specific Colors
  azure: {
    primary: '#0078D4',
    secondary: '#50E6FF',
    dark: '#003D5C',
  },
  microsoft365: {
    primary: '#D83B01',
    secondary: '#EA4300',
    accent: '#FFB900',
  },
  powerPlatform: {
    primary: '#742774',
    secondary: '#A855F7',
    accent: '#C026D3',
  },
  dynamics365: {
    primary: '#002050',
    secondary: '#0078D4',
  },
  teams: {
    primary: '#6264A7',
    secondary: '#5B5FC7',
  },
} as const;

export const MicrosoftLogos = {
  // Main Microsoft Logo
  microsoft: 'https://img.icons8.com/color/480/microsoft.png',

  // Partner Badges (Replace with official Microsoft Partner Network assets)
  goldPartner: 'https://placehold.co/300x120/0078D4/FFFFFF?text=Microsoft+Gold+Partner&font=raleway',
  certifiedPartner: 'https://placehold.co/200x80/0078D4/FFFFFF?text=Certified+Partner&font=raleway',

  // Product Logos
  azure: 'https://img.icons8.com/fluency/240/azure-1.png',
  microsoft365: 'https://img.icons8.com/color/240/microsoft-365.png',
  powerPlatform: 'https://img.icons8.com/color/240/power-bi.png', // Power BI as proxy
  dynamics365: 'https://img.icons8.com/color/240/dynamics-365.png',
  teams: 'https://img.icons8.com/color/240/microsoft-teams.png',
  sharepoint: 'https://img.icons8.com/color/240/sharepoint.png',
  powerApps: 'https://img.icons8.com/color/240/power-apps.png',
  powerAutomate: 'https://img.icons8.com/color/240/power-automate.png',
  powerBI: 'https://img.icons8.com/color/240/power-bi.png',
} as const;

// SVG Microsoft Logo Component (for inline use)
export const MicrosoftLogoSVG = () => (
  <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="0" y="0" width="10.87" height="10.87" fill="#F25022"/>
    <rect x="12.13" y="0" width="10.87" height="10.87" fill="#7FBA00"/>
    <rect x="0" y="12.13" width="10.87" height="10.87" fill="#00A4EF"/>
    <rect x="12.13" y="12.13" width="10.87" height="10.87" fill="#FFB900"/>
  </svg>
);

// Product screenshots (Replace with actual product screenshots)
export const MicrosoftProductScreenshots = {
  azurePortal: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=900&fit=crop',
  microsoft365Admin: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=900&fit=crop',
  powerBIDashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop',
} as const;
