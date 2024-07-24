import React from 'react'
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    rotateY: [0, 360],
    rotateX: [0, 360],
    rotateZ: [0, 360],
    transition: {
      x: { 
        yoyo: Infinity,
        duration: 0.5
      },
      y: { 
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      },
      rotateY: {
        yoyo: Infinity,
        duration: .5,
        ease: "linear"
      },
      rotateX: {
        yoyo: Infinity,
        duration: .5,
        ease: "linear"
      },
      rotateZ: {
        yoyo: Infinity,
        duration: .5,
        ease: "linear"
      },
    }
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  }
}

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
  return (
    <>
    <motion.div className="loader"
      variants={loaderVariants}
      animate={animation}
    >
    </motion.div>
    <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  )
}

export default Loader;