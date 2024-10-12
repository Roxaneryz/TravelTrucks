import css from "./CamperCard.module.css"

const CamperCard = ({ camper }) => {

  
  return (
    <div className={css.camperCard}>
      <h3>{camper.name}</h3>
      <img src={camper.image} alt={camper.name} />
      <p>Price: {camper.price}</p>
      <p>Reviews: {camper.reviews}</p>
      <p>Rating: {camper.rating}</p>
      <p>Description: {camper.description}</p>
      <p>{camper.type}</p>
      <p>Location: {camper.location}</p>
      <button className={css.btnCard}>Show more</button>
    </div>
  );
};

export default CamperCard