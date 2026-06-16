import { motion, useReducedMotion } from 'framer-motion'

/**
 * The Thread — the studio's signature element.
 * A single continuous cobalt stroke that draws itself across the hero,
 * weaving through the headline. The through-line of good design, made literal.
 */
export default function Thread({ className }) {
  const reduce = useReducedMotion()

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: reduce ? 0 : 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
        opacity: { duration: 0.3, delay: 0.4 },
      },
    },
  }

  return (
    <svg
      className={className}
      viewBox="0 0 1200 420"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M-20 250
           C 120 250, 150 90, 280 90
           S 470 360, 600 320
           S 760 70, 900 120
           S 1080 300, 1240 220"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        initial="hidden"
        animate="visible"
      />
      {/* travelling node that rides the thread as it draws */}
      {!reduce && (
        <motion.circle
          cx="0"
          cy="0"
          r="5"
          fill="var(--accent)"
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
          transition={{
            offsetDistance: { duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
            opacity: { duration: 2.6, delay: 0.4, times: [0, 0.04, 0.96, 1] },
          }}
          style={{
            offsetPath:
              "path('M-20 250 C 120 250, 150 90, 280 90 S 470 360, 600 320 S 760 70, 900 120 S 1080 300, 1240 220')",
          }}
        />
      )}
    </svg>
  )
}
