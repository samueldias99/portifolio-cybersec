import React from 'react'

// Render the official TryHackMe SVG from CDN as an img element
const TryHackMeIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tryhackme.svg"
    alt="TryHackMe"
    width={40}
    height={40}
    style={{ display: 'inline-block' }}
    {...props}
  />
)

export default TryHackMeIcon
