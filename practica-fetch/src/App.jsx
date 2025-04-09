import { BrowserRouter as Router, Routes, Route} from 'react-router'

import Nav from './components/Nav'
import DragonBall from './pages/DragonBall'
import './App.css'
import Rick from './pages/RickAndMorty'

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/dragon" element={<DragonBall/>} />
          <Route path="/rick" element={<Rick />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


  