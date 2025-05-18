import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MainErrorFallback from '@/components/errors/main';

const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

function Router() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Router;
