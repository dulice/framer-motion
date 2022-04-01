import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Greet = () => {
  const h1Variant = {
    hidden: {
      y : "-100vh"
    },
    visible: {
      y: 0,
      transition : {
        duration : 1,
         type : "spring",
         stiffness: "50"
      }
    },
    exit : {
      y: "-100vh",
      transition : {
        ease: "easeInOut"
      }
    }
  }
    const buttonVariant = {
      visible: {
        y: 0,
        transition : {duration : 1, type : "spring", stiffness: "50"}
      },
      hidden: {
        y: "100vh"
      },
      exit : {
        y: "100vh",
        transition: { ease: "easeInOut" }
      },
      hover: {
        scale: 1.1,
        boxShadow: "0 0 8px rgb(255, 255, 255)",
        textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
        transition: {
              type : "Spring", stiffness: 300
        }
      }
   }
   const pVariant = {
     visible: {
       opacity: 1,
       transition: {ease: "easeIn", delay: 1}
     },
     hidden: {
       opacity: 0
     },
     exit : {
       opacity: 0,
       transition: {ease: "easeOut"}
     }
   }
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center text-white">
            <motion.h1
              variants = {h1Variant}
              initial = "hidden"
              animate="visible"
              exit="exit"
            >Welcome</motion.h1>
            <AnimatePresence>
              <motion.p
              variants={pVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >Find your favorite places to visit.</motion.p>
            </AnimatePresence>
            <Link to="/country">
                <motion.button
                  variants={buttonVariant}    
                  initial="hidden"
                  animate="visible"             
                  whileHover="hover"
                  exit="exit"
                 >explore</motion.button>
            </Link>
        </div>
    </div>
  )
}

export default Greet