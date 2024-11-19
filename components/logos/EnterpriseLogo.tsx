interface EnterpriseLogoProps {
  className?: string;
}

export function EnterpriseLogo({ className = "" }: EnterpriseLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 362.89 125.82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Bars */}
        <rect className="text-primary" fill="currentColor" y="41.03" width="10.3" height="43.76" rx="2.73" ry="2.73"/>
        <rect className="text-primary" fill="currentColor" x="18.02" y="22.79" width="10.3" height="80.23" rx="2.73" ry="2.73"/>
        <rect className="text-primary" fill="currentColor" x="36.04" y="41.03" width="10.3" height="43.76" rx="2.73" ry="2.73"/>
        <rect className="text-primary" fill="currentColor" x="54.06" y="22.79" width="10.3" height="80.23" rx="2.73" ry="2.73"/>
        <rect className="text-primary" fill="currentColor" x="72.08" width="10.3" height="125.82" rx="2.73" ry="2.73"/>
        <rect className="text-primary" fill="currentColor" x="90.1" y="22.79" width="10.3" height="80.23" rx="2.73" ry="2.73"/>
        <rect className="text-primary" fill="currentColor" x="106.83" y="41.03" width="10.3" height="43.76" rx="2.73" ry="2.73"/>
        
        {/* Text */}
        <g className="text-gray-600" fill="currentColor">
          {/* Enterprise text paths */}
          <path d="M136.93,85.08c-.91,0-1.6-.13-2.07-.39-.48-.26-.77-.64-.89-1.14-.12-.5-.18-1.08-.18-1.75v-43.38c0-.62.08-1.17.25-1.64.17-.48.49-.86.96-1.14.48-.29,1.14-.43,2-.43h15.65c2.24,0,4.33.35,6.29,1.04,1.95.69,3.66,1.74,5.11,3.14,1.45,1.41,2.58,3.11,3.39,5.11.81,2,1.21,4.31,1.21,6.93s-.41,4.92-1.21,6.9c-.81,1.98-1.95,3.66-3.43,5.04-1.48,1.38-3.18,2.42-5.11,3.11-1.93.69-4.04,1.04-6.32,1.04h-12.29v14.36c0,.67-.08,1.24-.25,1.71-.17.48-.48.85-.93,1.11-.45.26-1.18.39-2.18.39Z"/>
          {/* Add remaining text paths here */}
        </g>
      </g>
    </svg>
  );
}