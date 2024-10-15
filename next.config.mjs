/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://x.ariisco.com/api/v1',
    },
    serverRuntimeConfig: {
        baseUrl: process.env.BASE_URL || 'https://x.ariisco.com/api/v1',
    },
};

export default nextConfig;
