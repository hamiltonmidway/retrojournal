import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Journal from './Journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal/:retro" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;