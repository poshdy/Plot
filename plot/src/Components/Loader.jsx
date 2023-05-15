import React from 'react'
import {motion} from 'framer-motion'

const Loader = () => {
  return (
    <motion.div className='w-full flex justify-center items-center' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3 }}  >Loading Please Wait....</motion.div>
  )
}

export default Loader