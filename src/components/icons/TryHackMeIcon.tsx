import React from 'react'

// TryHackMe-style shield icon (clean, high-contrast)
const TryHackMeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="thmGrad" x1="0" x2="1">
        <stop offset="0%" stopColor="#ff8a00" />
        <stop offset="100%" stopColor="#ff3d00" />
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="96" fill="none" />
    <path d="M256 40c0 0-136 48-176 88s-40 152-40 152 20 184 216 232c196-48 216-232 216-232s0-112-40-152S256 40 256 40z" fill="url(#thmGrad)" />
    <g fill="#fff">
      <path d="M180 220c0-33 27-60 60-60 15 0 29 5 40 14l-18 24c-7-6-16-10-26-10-22 0-40 18-40 40s18 40 40 40c10 0 19-4 26-10l18 24c-11 9-25 14-40 14-33 0-60-27-60-60z" />
      <path d="M300 188h28v136h-28z" />
      <path d="M348 188h28v136h-28z" opacity="0.9" />
    </g>
  </svg>
)

export default TryHackMeIcon
