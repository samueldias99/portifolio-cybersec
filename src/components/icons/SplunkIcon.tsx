interface IconProps {
  className?: string;
}

const SplunkIcon = ({ className = "w-6 h-6" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Splunk-style chevron pattern */}
      <path
        d="M4 12L8 8L12 12L8 16L4 12Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M8 12L12 8L16 12L12 16L8 12Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M12 12L16 8L20 12L16 16L12 12Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M4 12L8 8L12 12L8 16L4 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12L12 8L16 12L12 16L8 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L16 8L20 12L16 16L12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SplunkIcon;
