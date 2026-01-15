interface IconProps {
  className?: string;
}

const WiresharkIcon = ({ className = "w-6 h-6" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shark body */}
      <path
        d="M20 12C20 12 18 8 14 8C10 8 8 10 6 10C4 10 3 9 3 9C3 9 2 11 4 13C6 15 8 14 10 14C12 14 14 16 16 16C18 16 20 14 20 12Z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* Shark outline */}
      <path
        d="M20 12C20 12 18 8 14 8C10 8 8 10 6 10C4 10 3 9 3 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9C3 9 2 11 4 13C6 15 8 14 10 14C12 14 14 16 16 16C18 16 20 14 20 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dorsal fin */}
      <path
        d="M12 8L13 4L14 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Eye */}
      <circle cx="16" cy="11" r="1" fill="currentColor" />
    </svg>
  );
};

export default WiresharkIcon;
