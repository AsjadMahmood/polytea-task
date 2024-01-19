import { useState } from 'react'
import './App.css'
import { ProductTrends } from './pages/product-trends'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductTrends></ProductTrends>
    </>
  )
}

export default App