// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Printivo from '../pages/Printivo';
// import { NotFound } from '../pages/NotFound';
// import HomePage from '../pages/HomePage';
// import SchoolPortal from '../pages/schoolportal';
// import Dashboard from '../studentportal/dashboard';
// import ProtectedRoute from '../studentportal/protectedRoute';





// function RouteApp() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/printivo" element={<Printivo />} />
//         <Route path="/schoolportal" element={<SchoolPortal />} />
//         <Route path="/dashboard" element={ <ProtectedRoute>  <Dashboard/> </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<NotFound />} />

//       </Routes>

//     </>
//   )
// }

// export default RouteApp;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Printivo from '../pages/Printivo';
import { NotFound } from '../pages/NotFound';
import HomePage from '../pages/HomePage';
import SchoolPortal from '../pages/schoolportal';
import Dashboard from '../studentportal/dashboard';
import ProtectedRoute from '../studentportal/protectedRoute';
import SignupForm from '../studentportal/signup';
import MusicApp from '../pages/MusicApp';

function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/printivo" element={<Printivo />} />
      <Route path="/sigupform" element={<SignupForm />} />
      <Route path="/music" element={<MusicApp />} />
      <Route path="/schoolportal">
        <Route index element={<SchoolPortal />} />
        <Route 
          path="dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteApp;