interface PingMeLogoProps {
  className?: string;
}

export function PingMeLogo({ className = "" }: PingMeLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 465.6 125.82"
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
          {/* PingMe text paths */}
          <path d="M140.67,85.99c-.95,0-1.66-.13-2.11-.39s-.75-.64-.89-1.14c-.14-.5-.21-1.08-.21-1.75v-43.38c0-1.19.25-2.02.75-2.5.5-.48,1.39-.71,2.68-.71h28.73c.67,0,1.24.07,1.71.21.48.14.83.45,1.07.93.24.48.36,1.19.36,2.14s-.13,1.66-.39,2.11c-.26.45-.63.75-1.11.89-.48.14-1.05.21-1.71.21h-25.66v14.79h17.87c.67,0,1.23.07,1.68.21.45.14.8.43,1.04.86.24.43.36,1.1.36,2,0,.86-.12,1.5-.36,1.93-.24.43-.61.71-1.11.82-.5.12-1.08.18-1.75.18h-17.72v16.15h25.73c.67,0,1.24.07,1.71.21.48.14.83.44,1.07.89.24.45.36,1.15.36,2.11s-.13,1.66-.39,2.11c-.26.45-.63.75-1.11.89-.48.14-1.05.21-1.71.21h-28.87Z"/>
          {/* Add remaining text paths here */}
        </g>
      </g>
    </svg>
  );
} 