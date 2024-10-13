import {
  Link,
  Outlet
  
  // useLocation,
  // useNavigate,
  // useParams,
} from "react-router-dom";
import css from "./CamperDetailsPage.module.css"
import BookingForm from "../../components/BookingForm/BookingForm";
import CamperDetails from "../../components/CamperDetails/CamperDetails";

const CamperDetailsPage = () => {
  return (
    <div>
      <div>
        {/* <CamperDetails/> */}
      </div>
      <div>
        <div>
          <nav>
            <Link to="features">Features</Link>
            <Link to="reviews">Reviews</Link>
          </nav>
<Outlet/>
        </div>
         <BookingForm />
      </div>
    
    </div>
  );
};

export default CamperDetailsPage;
