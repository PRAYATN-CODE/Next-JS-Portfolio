'use client'

export default function myImageLoader({ src, width, quality }) {
    if (src.startsWith('https://iili.io')) return src
    return `https://nextjsportfolio.com/${src}?${width}?${quality || 75}`
}