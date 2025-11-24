import React from 'react'

const TryHackMeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="thmGrad" x1="0" x2="1">
        <stop offset="0%" stopColor="#FF7A18"/>
        <stop offset="100%" stopColor="#AF002D"/>
      </linearGradient>
    </defs>
    <path d="M12 2L3 6v5c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V6l-9-4z" fill="url(#thmGrad)" />
    <path d="M8.5 10.5c0-2.485 1.57-4.5 3.5-4.5s3.5 2.015 3.5 4.5c0 2.485-1.57 4.5-3.5 4.5s-3.5-2.015-3.5-4.5z" fill="#fff" opacity="0.06" />
    <path d="M12 7.5c1.2 0 2 .95 2 2.5s-.8 2.5-2 2.5-2-.95-2-2.5.8-2.5 2-2.5z" fill="#fff" opacity="0.9" />
  </svg>
)

export default TryHackMeIcon
