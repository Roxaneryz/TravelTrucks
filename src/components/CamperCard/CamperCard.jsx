import { useNavigate } from "react-router-dom";
import css from "./CamperCard.module.css"
import InfoLIst from "../InfoList/InfoLIst";

const CamperCard = ({ camper }) => {
 
  
const formattedPrice = camper.price.toFixed(2);
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/catalog/${camper.id}/features`); 
  }
  return (
    <div className={css.camperCard}>
      <h3>{camper.name}</h3>
      <img src={camper.gallery[0].original} alt={camper.name} />
      <InfoLIst camper={camper}/>
      <p>Price: {formattedPrice}€</p>
      <p>Rating: {camper.rating}</p>
      <p>Description: {camper.description}</p>
      <p>{camper.type}</p>
      <p>Location: {camper.location}</p>
      <button className={css.btnCard} onClick={handleClick}>Show more</button>
    </div>
  );
};

export default CamperCard