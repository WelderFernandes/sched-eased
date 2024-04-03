/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://github.com', 'avatars.githubusercontent.com', 'utfs.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['./src/components/ui/*'],
  },
}

export default nextConfig
