import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../component/home';
// import AboutPage from '../component/about';
// import ProjectsPage from '../component/project';
// import ContactPage from '../component/contact';



function RouteApp() {
  return (
    <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/contact" element={<ContactPage/>} /> */}
          </Routes>
 
    </>
  )
}

export default RouteApp;