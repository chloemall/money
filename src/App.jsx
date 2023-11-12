import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar'
import WidthWrapper from './components/WidthWrapper';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
    <WidthWrapper>
     <Content/>
    </WidthWrapper>
    <Footer/>
    </>
  )
}

export default App
