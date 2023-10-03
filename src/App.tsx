import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Waitlist,
  Dashboard,
  Discovery,
  Error,
  PrivateRoute,
} from './pages';

const routes = [
  { path: '/', element: <Home />, auth: false },
  { path: '/about', element: <About />, auth: false },
  { path: '/waitlist', element: <Waitlist />, auth: false },
  { path: '/dashboard', element: <Dashboard />, auth: false },
  { path: '/discovery', element: <Discovery />, auth: false },
  { path: '*', element: <Error />, auth: false },
];

function App() {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.auth ? (
                <PrivateRoute>{route.element}</PrivateRoute>
              ) : (
                route.element
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
