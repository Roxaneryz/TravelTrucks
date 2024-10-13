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
    <div className={css.camperDetails}>

      <h3>Vehicle details</h3>
      <ul className={css.featuresList}>
        <li className={css.featuresItem}>Form {camper.form}</li>
        <li className={css.featuresItem}>Length {camper.length}</li>
        <li className={css.featuresItem}>Width {camper.width}</li>
        <li className={css.featuresItem}>Height {camper.height}</li>
        <li className={css.featuresItem}>Tank {camper.tank}</li>
        <li className={css.featuresItem}>Consumption {camper.consumption}</li>
      </ul>
    </div>
  );
};

export default Features;

