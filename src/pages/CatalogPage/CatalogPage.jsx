import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operation";
import { selectCampers, selectError, selectIsLoading } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css"
import CamperCard from "../../components/CamperCard/CamperCard";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);


  const [visibleCampers, setVisibleCampers] = useState(4);

  if (isLoading) return <Loader />;
  if (error) return <div>Error:{error}</div>;

  const handleLoadMore = () => {
    setVisibleCampers((prev) => prev + 4);
}

  if (!campers?.length) {
    return <div>No campers available</div>;
  }

  // console.log(campers);

  return (
    <div>
      <Filter />
      <ul className={css.catalog}>
        <li className={css.camperList}>
          {campers.slice(0, visibleCampers).map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </li>
        {visibleCampers < campers.length && (
          <LoadMore onLoadMore={handleLoadMore} />
        )}
      </ul>
    </div>
  );
};

export default CatalogPage;
