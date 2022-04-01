import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { places } from "../components/data";
import { motion } from "framer-motion"

const Country = () => {
  const {id} = useParams();
    const [select, setSelect ] = useState(false)
const containerVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                delay: .5,
            }
        },
        exit : {
            x: "-100vw",
            transition: {
                ease: "easeOut"
            }
        }
    }
    const buttonVariant = {
        hidden: {
            x : "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            }
        },
        hover: {
            scale: 1.1,
                boxShadow: "0 0 8px rgb(255, 255, 255)",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
                transition: {
                    
                     yoyo: Infinity,
                }
        }
    }
    const listVariant = {
        hover: {
            scale: 1.3,
            originX: 0,
            color: "orange",
            transition: {
                    type : "Spring", stiffness: 300
            }
        }
    }
  return (

    <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container vh-100 d-flex justify-content-center align-items-center">
        <ul className="list-group">
            {places[id].details.map(city => (
                <span key={city.id}>
                    <motion.li 
                   variants={listVariant}
                        whileHover="hover"
                     onClick={() => setSelect(true)} >{city.place}
                    </motion.li>
                </span>
            ))}
            {select && <Link to="/image">
                <motion.button
                      variants={buttonVariant}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                 >View</motion.button>
            </Link>}
        </ul>
    </motion.div>
  )
}

export default Country