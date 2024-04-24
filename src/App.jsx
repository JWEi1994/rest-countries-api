import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Countries />} />
          <Route path="/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
