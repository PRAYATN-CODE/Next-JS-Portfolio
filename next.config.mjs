/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
        remotePatterns: [
            {
                protocol: "https",
                hostname: "iili.io",
            },
        ],
    },
};

export default nextConfig;
