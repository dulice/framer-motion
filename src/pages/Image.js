import React from 'react'
import { motion } from "framer-motion"

const Image = () => {
  const imageVariant = {
    hidden: { scale : 0},
    visible: { 
      scale : 1,
      transition : {
        type: "Spring",
        stiffness: 50
      }
    },
    exit : {
      scale: 0,
      transition : {
        type: "Spring", stiffness: 50
      }
    }
  }
  return (
    <motion.div
      variants={imageVariant}
       initial="hidden"
       animate="visible"
       exit="exit"
        transition = {{type: "Spring", stiffness: 50}}
     className="d-flex justify-content-center align-items-center vh-100">
      <motion.img 
       
      className="image-responsive rounded" src="https://www.planetware.com/wpimages/2019/06/south-korea-top-tourist-attractions-seoul-tower.jpg" alt="img" />
    </motion.div>
  )
}

export default Image