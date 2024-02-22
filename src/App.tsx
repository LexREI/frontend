import React, { lazy, Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Pricing,
  PaySuccess,
  About,
  Waitlist,
  Login,
  Error,
  PrivateRoute,
} from './pages';
import {
  Discovery,
  LegalAICopilot,
  LegalDrafting,
  LegalResearch,
} from './pages/dashboard';
import { WebCrawler } from './pages/admins';
import { DefaultContext } from '@/contexts/default_context';
import AlertDestructive from '@/components/Alert/AlertDestructive';
import { AlertDefault } from '@/components/Alert/AlertDefault';
import Loader from '@/components/Loader';

const routes = [
  { path: '/', element: <Home />, auth: false },
  { path: '/pricing', element: <Pricing />, auth: false },
  { path: '/pay-success', element: <PaySuccess />, auth: false },
  { path: '/about', element: <About />, auth: false },
  { path: '/waitlist', element: <Waitlist />, auth: false },
  { path: '/discovery', element: <Discovery />, auth: false },
  { path: '/login', element: <Login />, auth: false },
  { path: '/admin/web-crawler', element: <WebCrawler />, auth: true },
  {
    path: '/dashboard/legal-ai-copilot',
    element: <LegalAICopilot />,
    auth: true,
  },
  { path: '/dashboard/legal-drafting', element: <LegalDrafting />, auth: true },
  { path: '/dashboard/legal-research', element: <LegalResearch />, auth: true },
  { path: '*', element: <Error />, auth: false },
];

function App() {
  const {
    successDescription,
    setSuccessDescription,
    errorDescription,
    setErrorDescription,
    processLoading,
    processLoadingTitle,
  } = useContext(DefaultContext);
  return (
    <Suspense fallback="">
      <Loader open={processLoading} title={processLoadingTitle} />
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
