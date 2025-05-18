import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MainErrorFallback from '@/components/errors/main';
import { HelmetProvider } from 'react-helmet-async';

const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

function Router() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <HelmetProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </HelmetProvider>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Router;
