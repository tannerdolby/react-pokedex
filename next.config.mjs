/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/PokeAPI/sprites/master/sprites/**/**.png',
          },
        ],
      },
};

export default nextConfig;
