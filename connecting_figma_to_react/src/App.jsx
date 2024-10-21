import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar component
import Matches from './pages/Matches';    // Import Matches page
import ExpertHelp from './pages/ExpertHelp'; // Import ExpertHelp page
import Explore from './pages/Explore';    // Import Explore page
import SignIn from './pages/SignIn';      // Import SignIn page
import SignUp from './pages/SignUp';      // Import SignUp page

const App = () => {
  return (
    <Router>  {/* Ensure BrowserRouter wraps your entire app */}
      <Navbar />  {/* This will render the Navbar component on all pages */}
      
      <Routes>  {/* Define Routes for your app */}
        <Route path="/" element={<Explore />} />  {/* Default Home route */}
        <Route path="/matches" element={<Matches />} />
        <Route path="/expert-help" element={<ExpertHelp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;