import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader"
import Navigation from "./components/Navigation/Navigation";

const HomePage =lazy(() => import ("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import ("./pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() => import ("./pages/CamperDetailsPage/CamperDetailsPage"));
const CamperDetails = lazy(() => import("./components/CamperDetails/CamperDetails"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));



const App = () =>{

  return (
    <div>
      <Navigation/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperDetails />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage/>}/>
            
          
        </Routes>
    </Suspense>
    </div>
   
  );
}

export default App;
