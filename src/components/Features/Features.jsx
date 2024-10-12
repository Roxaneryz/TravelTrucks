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
      <h2>Features</h2>
     
    </div>
  );
};

export default Features;
