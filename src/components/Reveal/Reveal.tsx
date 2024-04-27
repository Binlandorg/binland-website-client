import { motion, useAnimation, useInView } from 'framer-motion'
import { PropsWithChildren, useEffect, useRef } from 'react'

interface IReveal extends PropsWithChildren {
  classname?: string
}

const Reveal: React.FC<IReveal> = ({ children, classname }: IReveal) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) mainControls.start('visible')
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ overflow: 'hidden' }} className={classname}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
