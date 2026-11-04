import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bexavolt.com',
          },
        ],
        destination: 'https://bexavolt.com.au/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.bexavolt.com',
          },
        ],
        destination: 'https://bexavolt.com.au/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
