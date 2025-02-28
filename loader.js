'use client'

export default function myImageLoader({ src, width, quality }) {
    if (src.startsWith('https://iili.io')) return src
    return `https://next-js-portfolio-ivory-delta.vercel.app//${src}?${width}?${quality || 75}`
}