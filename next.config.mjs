/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://nobinco.com/api/v1',
    },
    serverRuntimeConfig: {
        baseUrl: process.env.BASE_URL || 'https://nobinco.com/api/v1',
    },
    images: {
       domains: ['nobinco.com', 'x.ariisco.com']
    },
};

export default nextConfig;
