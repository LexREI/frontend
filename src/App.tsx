import React, { lazy, Suspense, useContext } from 'react';
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
import { DefaultContext } from '@/contexts/default_context';
import AlertDestructive from '@/components/Alert/AlertDestructive';
import { AlertDefault } from '@/components/Alert/AlertDefault';

const routes = [
  { path: '/', element: <Home />, auth: false },
  { path: '/about', element: <About />, auth: false },
  { path: '/waitlist', element: <Waitlist />, auth: false },
  { path: '/dashboard', element: <Dashboard />, auth: false },
  { path: '/discovery', element: <Discovery />, auth: false },
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
