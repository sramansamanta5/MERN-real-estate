import { useState } from 'react'
import { Button } from '@material-tailwind/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button className='bg-red-500'>Close</Button>
      </div>
    </>
  )
}

export default App
