import { useState } from 'react'
import Navbar from './Components/Navbar'
import BadgesList from './Components/Badges/BadgesList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BadgesList/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
