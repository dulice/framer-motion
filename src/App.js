import { Route, Routes, useLocation } from 'react-router-dom';
import Greet from './pages/Greet';
import Country from './pages/Country';
import Place from './pages/Place';
import Image from './pages/Image';
import "bootstrap/dist/css/bootstrap.css"
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
          <Routes location={location} key={location.key} >
            <Route path="/" element={ < Greet /> } />
            <Route path="/country" element={ <Country /> } />
            <Route path="/country/:id" element={ <Place /> } />
            <Route path="/image" element={ <Image /> } />
          </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
