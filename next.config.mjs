/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://github.com', 'avatars.githubusercontent.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['./components/ui/*'],
  },
}

export default nextConfig
