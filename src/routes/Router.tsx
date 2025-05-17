import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'))

function Router() {
    return (
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      );
}

export default Router;