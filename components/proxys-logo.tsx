export function ProxysLogo({
  className = "",
  width = 120,
  height = 80,
}: { className?: string; width?: number; height?: number }) {
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ width, height }}>
      {/* Shield with checkmark */}
      <div className="relative mb-1">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
        >
          {/* Outer shield shadow */}
          <path
            d="M24 4L8 10V22C8 32 16 40 24 44C32 40 40 32 40 22V10L24 4Z"
            fill="#0B4D8C"
            transform="translate(1, 1)"
          />
          {/* Main shield */}
          <path d="M24 4L8 10V22C8 32 16 40 24 44C32 40 40 32 40 22V10L24 4Z" fill="url(#shieldGradient)" />
          {/* Checkmark */}
          <path d="M18 24L22 28L30 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E90FF" />
              <stop offset="100%" stopColor="#0066CC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      <div className="text-center leading-tight">
        <div className="text-[#1E90FF] font-bold text-sm sm:text-base lg:text-lg tracking-wide">PROXYS</div>
        <div className="text-gray-900 font-bold text-xs sm:text-sm lg:text-sm tracking-wide">ONLINE</div>
      </div>
    </div>
  )
}
