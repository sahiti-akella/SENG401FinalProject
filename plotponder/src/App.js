import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage';
import Community from './components/pages/Community';
import Account from './components/pages/Account';
import Recommendations from './components/pages/Recommendations';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Recommendations" element={<Recommendations />} />
          <Route path="/Account" element={<Account />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
