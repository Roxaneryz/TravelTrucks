import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./Features.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operation";
import { selectCurrentCamper } from "../../redux/campers/selectors";

const Features = () => {
  const { camperId } = useParams();
  const camper = useSelector(selectCurrentCamper);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperById(camperId));

  }, [camperId]);

  
  return (
    <div>
      <h3>Features</h3>
      {/* <ul className={css.featuresList}>
        {camper?.reviews.map((review) => {
          return (
            <li className={css.review} key={review.reviewer_name}>
              <h3>{review.reviewer_name}</h3>
              <StarRatings
                rating={review.reviewer_rating}
                starRatedColor="gold"
                starDimension="20px"
                starSpacing="15px"
              />
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Features;

