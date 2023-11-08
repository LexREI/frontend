import React, { lazy, Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Pricing,
  PaySuccess,
  About,
  Waitlist,
  Dashboard,
  Discovery,
  Login,
  Error,
  PrivateRoute,
} from './pages';
import { DefaultContext } from '@/contexts/default_context';
import AlertDestructive from '@/components/Alert/AlertDestructive';
import { AlertDefault } from '@/components/Alert/AlertDefault';

const routes = [
  { path: '/', element: <Home />, auth: false },
  { path: '/pricing', element: <Pricing />, auth: false },
  { path: '/pay-success', element: <PaySuccess />, auth: false },
  { path: '/about', element: <About />, auth: false },
  { path: '/waitlist', element: <Waitlist />, auth: false },
  { path: '/dashboard', element: <Dashboard />, auth: false },
  { path: '/discovery', element: <Discovery />, auth: false },
  { path: '/login', element: <Login />, auth: false },
  { path: '*', element: <Error />, auth: false },
];

function App() {
  const {
    successDescription,
    setSuccessDescription,
    errorDescription,
    setErrorDescription,
  } = useContext(DefaultContext);
  return (
    <Suspense fallback="">
      {successDescription && (
        <AlertDefault
          description={successDescription}
          setSuccessDescription={setSuccessDescription}
        />
      )}
      {errorDescription && (
        <AlertDestructive
          description={errorDescription}
          setErrorDescription={setErrorDescription}
        />
      )}
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
    </Suspense>
  );
}

export default App;
