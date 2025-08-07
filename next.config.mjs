/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images and fonts
  optimizeFonts: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  // Ensure consistent builds
  generateEtags: false,
  
  // Handle static optimization
  trailingSlash: false,
  
  // Improve build consistency
  poweredByHeader: false,
};

export default nextConfig;
