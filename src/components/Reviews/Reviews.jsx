import { useEffect,  } from "react";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css"
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operation";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import StarRatings from "react-star-ratings";
// import { fetchMovieReviews } from "../../movieApi";

const Reviews = () => {
   const { camperId } = useParams();
   const camper = useSelector(selectCurrentCamper);
   const dispatch = useDispatch();

  
   useEffect(() => {
     dispatch(fetchCamperById(camperId));
   }, [camperId]);

console.log(camper);



  return (
    <div className={css.camperReview}>
      <h3>Reviews</h3>
      <ul className={css.listReview}>
        {camper?.reviews.map((review) => {
          return (
            <li className={css.review} key={review.reviewer_name}>
              <h3>{review.reviewer_name}</h3>
              <StarRatings
                rating={review.reviewer_rating}
                starRatedColor="gold"
                starDimension="20px"
                starSpacing="2px"
              />
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Reviews;
