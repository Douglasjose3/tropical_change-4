import { useState } from 'react'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Whats from './Component/Whats'
import Footer from './Component/Footer'
import Copyright from './Component/Copyright'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <About />
        <Whats />
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default App;
