import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operation";
import { selectCampers, selectError, selectIsLoading } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css"
import CamperCard from "../../components/CamperCard/CamperCard";

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error:{error}</div>;

  // if (!campers.length) {
  //   return <div>No campers available</div>;

  // console.log(campers);

  return <ul className={css.catalog}>
    <li className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper}/>
      ))};
    </li>
    <button className={css.loadMore}>Load More</button>
  </ul>;
};

export default CatalogPage;
