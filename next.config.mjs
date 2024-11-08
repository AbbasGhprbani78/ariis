/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://x.ariisco.com/api/v1',
    },
    serverRuntimeConfig: {
        baseUrl: process.env.BASE_URL || 'https://x.ariisco.com/api/v1',
    },
    images: {
        domains: ['x.ariisco.com'], // Add the allowed domain here
    },
};

export default nextConfig;
