/** @type {import('next').NextConfig} */
export default {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material']
  }
}