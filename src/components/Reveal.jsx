import { motion } from 'framer-motion'

/**
 * Reveal — scroll-triggered entrance used across sections.
 * Subtle by default: a short rise + fade, staggered when given an index.
 */
export default function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 22,
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
