import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol:'https',
      hostname:'upload.wikimedia.org',
      port:'',
      pathname:'/**'
    
  }]
  }
};

export default nextConfig;
