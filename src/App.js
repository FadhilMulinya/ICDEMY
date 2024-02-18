import React, { useState } from 'react';
import './App.css';
import Nanodegree from './components/Nanodegree';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Blog from './components/Blogs';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import LearnMoreButton from './components/LearnMoreButton';
import Visuals from './components/Visuals';


const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignInClick = () => {
    setSignedIn((prevSignedIn) => !prevSignedIn);
  };

  return (
    <div>
      <Header signedIn={signedIn} onSignInClick={handleSignInClick} />
      <MainBanner />
      <LearnMoreButton />
      <Visuals />
      <Nanodegree />
      <Courses/>
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
