import {
  Link,
  Outlet
  // Outlet,
  // useLocation,
  // useNavigate,
  // useParams,
} from "react-router-dom";
import css from "./CamperDetailsPage.module.css"
import BookingForm from "../../components/BookingForm/BookingForm";

const CamperDetailsPage = () => {
  return (
    <div>
      <div></div>
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
