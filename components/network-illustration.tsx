export function NetworkIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066CC" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#0066CC" />
          </linearGradient>
        </defs>

        {/* Background decorative circles */}
        <circle cx="100" cy="80" r="60" fill="#1E90FF" opacity="0.1" />
        <circle cx="400" cy="320" r="80" fill="#00BFFF" opacity="0.08" />
        <circle cx="380" cy="60" r="40" fill="#1E90FF" opacity="0.12" />

        {/* Server/Proxy nodes */}
        <g>
          {/* Node 1 */}
          <rect
            x="60"
            y="120"
            width="50"
            height="35"
            rx="6"
            fill="url(#nodeGradient1)"
            stroke="#1E90FF"
            strokeWidth="2"
          />
          <rect x="68" y="128" width="34" height="4" rx="2" fill="white" opacity="0.8" />
          <rect x="68" y="135" width="34" height="4" rx="2" fill="white" opacity="0.6" />
          <rect x="68" y="142" width="34" height="4" rx="2" fill="white" opacity="0.4" />

          {/* Node 2 */}
          <rect
            x="200"
            y="60"
            width="50"
            height="35"
            rx="6"
            fill="url(#nodeGradient2)"
            stroke="#1E90FF"
            strokeWidth="2"
          />
          <rect x="208" y="68" width="34" height="4" rx="2" fill="white" opacity="0.8" />
          <rect x="208" y="75" width="34" height="4" rx="2" fill="white" opacity="0.6" />
          <rect x="208" y="82" width="34" height="4" rx="2" fill="white" opacity="0.4" />

          {/* Node 3 */}
          <rect
            x="370"
            y="140"
            width="50"
            height="35"
            rx="6"
            fill="url(#nodeGradient1)"
            stroke="#1E90FF"
            strokeWidth="2"
          />
          <rect x="378" y="148" width="34" height="4" rx="2" fill="white" opacity="0.8" />
          <rect x="378" y="155" width="34" height="4" rx="2" fill="white" opacity="0.6" />
          <rect x="378" y="162" width="34" height="4" rx="2" fill="white" opacity="0.4" />

          {/* Node 4 */}
          <rect
            x="120"
            y="280"
            width="50"
            height="35"
            rx="6"
            fill="url(#nodeGradient2)"
            stroke="#1E90FF"
            strokeWidth="2"
          />
          <rect x="128" y="288" width="34" height="4" rx="2" fill="white" opacity="0.8" />
          <rect x="128" y="295" width="34" height="4" rx="2" fill="white" opacity="0.6" />
          <rect x="128" y="302" width="34" height="4" rx="2" fill="white" opacity="0.4" />

          {/* Node 5 */}
          <rect
            x="340"
            y="300"
            width="50"
            height="35"
            rx="6"
            fill="url(#nodeGradient1)"
            stroke="#1E90FF"
            strokeWidth="2"
          />
          <rect x="348" y="308" width="34" height="4" rx="2" fill="white" opacity="0.8" />
          <rect x="348" y="315" width="34" height="4" rx="2" fill="white" opacity="0.6" />
          <rect x="348" y="322" width="34" height="4" rx="2" fill="white" opacity="0.4" />
        </g>

        {/* Connection lines */}
        <g stroke="#1E90FF" strokeWidth="2" opacity="0.6">
          <line x1="110" y1="137" x2="200" y2="77" strokeDasharray="5,3" />
          <line x1="250" y1="77" x2="370" y2="157" strokeDasharray="5,3" />
          <line x1="110" y1="155" x2="120" y2="297" strokeDasharray="5,3" />
          <line x1="170" y1="297" x2="340" y2="317" strokeDasharray="5,3" />
          <line x1="225" y1="95" x2="145" y2="280" strokeDasharray="5,3" />
          <line x1="395" y1="175" x2="365" y2="300" strokeDasharray="5,3" />
        </g>

        {/* Central hub/proxy server */}
        <g>
          <circle cx="250" cy="200" r="35" fill="url(#centralGradient)" stroke="#0066CC" strokeWidth="3" />
          <circle cx="250" cy="200" r="25" fill="white" opacity="0.9" />
          <circle cx="250" cy="200" r="15" fill="#1E90FF" />
          <circle cx="250" cy="200" r="8" fill="white" />

          {/* Hub connection lines */}
          <g stroke="#1E90FF" strokeWidth="2" opacity="0.7">
            <line x1="85" y1="137" x2="215" y2="200" />
            <line x1="225" y1="77" x2="250" y2="165" />
            <line x1="370" y1="157" x2="285" y2="200" />
            <line x1="145" y1="280" x2="215" y2="235" />
            <line x1="340" y1="317" x2="285" y2="235" />
          </g>
        </g>

        {/* Animated data flow indicators */}
        <g fill="#00BFFF">
          <circle cx="150" cy="108" r="3">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 65,92; 0,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="310" cy="118" r="3">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -60,82; 0,0"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="180" cy="340" r="3">
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 70,-140; 0,0"
              dur="2s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Network signals/waves */}
        <g stroke="#1E90FF" strokeWidth="1" fill="none" opacity="0.3">
          <circle cx="250" cy="200" r="50">
            <animate attributeName="r" values="50;70;50" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="200" r="60">
            <animate attributeName="r" values="60;80;60" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}
