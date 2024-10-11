import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operation";
import { selectCampers } from "../../redux/campers/selectors";

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  console.log(campers);

  return <div>CatalogPage</div>;
};

export default CatalogPage;
