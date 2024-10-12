import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader"
import Navigation from "./components/Navigation/Navigation";


const HomePage =lazy(() => import ("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import ("./pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() => import ("./pages/CamperDetailsPage/CamperDetailsPage"));
const Features = lazy(() => import("./components/Features/Features"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));



const App = () =>{

  return (
    <div>
      <Navigation/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage/>}/>
            
          
        </Routes>
    </Suspense>
    </div>
   
  );
}

export default App;
