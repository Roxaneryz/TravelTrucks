import {
  Link,
  Outlet,
  useParams

} from "react-router-dom";
import css from "./CamperDetailsPage.module.css"
import BookingForm from "../../components/BookingForm/BookingForm";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { fetchCamperById } from "../../redux/campers/operation";




const CamperDetailsPage = () => {

    const { camperId } = useParams();
    const camper = useSelector(selectCurrentCamper);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCamperById(camperId));
    }, [camperId]);
  return (
    <div>
      <div>
        <CamperDetails camper={camper} />
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
