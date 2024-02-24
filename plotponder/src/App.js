import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage';
import Community from './components/pages/Community';
import Account from './components/pages/Account';
import Recommendations from './components/pages/Recommendations';
import BookBot from './components/pages/BookBot';
import SignIn from './components/pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './components/pages/SignUp';
import AddBook from './components/pages/AddBook';
import ViewCommunities from './components/pages/ViewCommunities';

function App() {
  // Get the current route
  const currentRoute = window.location.pathname;

  // Function to determine whether to show Navbar
  const shouldShowNavbar = () => {
    return currentRoute !== '/' && currentRoute !== '/SignIn' && currentRoute !== '/SignUp';
  };

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* Other Pages */}
        <Route path="/Community" element={<Community />} />
        <Route path="/Community/View" element={<ViewCommunities />} />
        <Route path="/Recommendations" element={<Recommendations />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Account/AddBook" element={<AddBook />} />
        <Route path="/Recommendations/BookBot" element={<BookBot />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Navbar outside of Routes */}
      {shouldShowNavbar() && <Navbar />}
    </Router>
  );
}

export default App;
