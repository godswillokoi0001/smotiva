import React from 'react'

type RadialTextProps = {
  className?: string
  label?: string
}

export const RadialText: React.FC<RadialTextProps> = ({ className, label }) => {
  const words = label
    ? [label]
    : [
        'GET IN TOUCH,',
        'DON’T BE SHY —',
        'TALK TO US',
        'WHEN YOU’RE READY.',
      ]

  const radius = 320
  const tickLength = 70
  const tickRadius = radius + tickLength

  const startAngles = [0, 72, 156, 236]
  const endAngles = [72, 156, 236, 355]

  const ticks = [45, 95, 145, 225, 325, 0]

  const placeWord = (word: string, startDeg: number, endDeg: number) => {
    const midDeg = (startDeg + endDeg) / 2
    const rad = (midDeg * Math.PI) / 180
    const x = radius * Math.cos(rad)
    const y = radius * Math.sin(rad)
    const orient = midDeg + 90

    return (
      <text
        key={word}
        x={x}
        y={y}
        fill="#fffdf0"
        fontSize={18}
        fontFamily="Lufga"
        fontWeight={500}
        letterSpacing={0.5}
        textAnchor="middle"
        dominantBaseline="central"
        transform={`rotate(${orient} ${x} ${y})`}
        style={{ WebkitTextStroke: '0.4px #9aa3ad', paintOrder: 'stroke fill' }}
      >
        {word}
      </text>
    )
  }

  const ticksRender = ticks.map((deg: number) => {
    const rad = (Math.PI * deg) / 180
    const x1 = radius * Math.cos(rad)
    const y1 = radius * Math.sin(rad)
    const x2 = tickRadius * Math.cos(rad)
    const y2 = tickRadius * Math.sin(rad)
    return (
      <line
        key={deg}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#fffdf0"
        strokeWidth={2}
        strokeLinecap="round"
      />
    )
  })

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        width: 800,
        height: 800,
        left: '50%',
        top: '50%',
        marginLeft: -400,
        marginTop: -800,
        display: 'block',
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ display: 'block', position: 'absolute', left: '0', top: '0' }}
        viewBox="-400 -400 800 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dashed ring */}
        <circle
          cx="0"
          cy="0"
          r={radius}
          fill="none"
          stroke="#fffdf0"
          strokeWidth={1.4}
          strokeDasharray="1 58"
          opacity={0.55}
        />

        {/* Tick marks */}
        {ticksRender}

        {/* Words on the arc */}
        {words.map((word, i) =>
          placeWord(word, startAngles[i] ?? 0, endAngles[i] ?? 0)
        )}
      </svg>
    </span>
  )
}
