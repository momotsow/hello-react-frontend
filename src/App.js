import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
