import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './HeaderComponents/Title'
import TableContetnt from './ContentComponents/TableContetnt'
import ProgressAndChart from './ContentComponents/ProgressAndChart'
import Footer from './Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Title/>
  
      <TableContetnt/>
      <ProgressAndChart/>
   
     <Footer/>
   </div>
  )
}

export default App
