interface IconProps {
  className?: string;
}

const SiemIcon = ({ className = "w-6 h-6" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield with data streams */}
      <path
        d="M12 2L4 6V11C4 15.55 7.16 19.74 12 21C16.84 19.74 20 15.55 20 11V6L12 2Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M12 2L4 6V11C4 15.55 7.16 19.74 12 21C16.84 19.74 20 15.55 20 11V6L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Data visualization bars */}
      <line x1="8" y1="14" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="14" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default SiemIcon;
