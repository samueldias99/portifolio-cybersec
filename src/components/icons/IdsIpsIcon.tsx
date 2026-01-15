interface IconProps {
  className?: string;
}

const IdsIpsIcon = ({ className = "w-6 h-6" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Network nodes */}
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.3" />
      
      {/* Connections */}
      <line x1="8" y1="7" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="7" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="17" x2="10" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="17" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Shield overlay */}
      <path
        d="M12 8L9 10V13L12 15L15 13V10L12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IdsIpsIcon;
