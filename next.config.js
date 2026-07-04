/** @type {import('next').NextConfig} */
export default {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['@mui/material', '@mui/material-nextjs', 'material-react-table'],
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
