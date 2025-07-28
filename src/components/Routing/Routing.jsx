import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../pages/Layout";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<p>Loading Home UI...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<div>Loading CoinDetails UI...</div>}>
              <CoinDetailsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default Routing;
