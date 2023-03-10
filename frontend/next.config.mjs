/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false,
      extensions: [],
    }

    return config
  },
}

export default nextConfig
