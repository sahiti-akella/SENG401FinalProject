import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from './components/pages/WelcomePage';
import Account from './components/pages/Account';
import Recommendations from './components/pages/Recommendations';
import BookBot from './components/pages/BookBot';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import AddBook from './components/pages/AddBook';
import Home from './components/pages/Home';
import Communities from './components/pages/Communities';
import CommunityPage from './components/pages/CommunityPage';
import ChangePassword from './components/pages/ChangePassword';
import DeleteUser from './components/pages/DeleteUser';

function App() {
  const [communityList, setCommunityList] = useState([]);

  const addCommunity = (title) => {
    setCommunityList([...communityList, title]);
  }

  return (
    <Router>
      <div> {/* Wrap everything in a div */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<WelcomePage />} />

          {/* Communities Page */}
          <Route path="/community" element={<Communities communities={communityList} addCommunity={addCommunity} />} />
          <Route path="/community/:title" element={<CommunityPage />} />

          {/* Other Pages */}
          <Route path="/Recommendations" element={<Recommendations />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/Recommendations/BookBot" element={<BookBot />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/DeleteUser" element={<DeleteUser />} />
          
          
          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;