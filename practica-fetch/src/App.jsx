import { BrowserRouter as Router, Routes, Route} from 'react-router'

import Nav from './components/Nav'
import DragonBall from './pages/DragonBall'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/dragon" element={<DragonBall/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App


  