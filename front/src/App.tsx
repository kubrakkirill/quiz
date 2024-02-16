import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss'

const App = () =>{
    return <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
}

export default App