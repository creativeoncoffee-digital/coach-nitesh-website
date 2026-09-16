/** @type {import('next').NextConfig} */
const nextConfig = {
  // Yeh line Next.js ko 'out' folder banane ka instruction deti hai
  output: 'export', 
  
  images: {
    // Static export ke time Next.js ka default image optimizer kaam nahi karta
    // Isko true karna zaroori hai kyunki humne Hero section mein <Image /> component use kiya hai
    unoptimized: true, 
  }
};

module.exports = nextConfig;