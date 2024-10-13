import css from "./CamperDetails.module.css"



const CamperDetails = ({ camperId }) => {

  const formattedPrice = camperId.price.toFixed(2);

  return (
    <div className={css.camperDetails}>
      <h3>{camperId.name}</h3>
      <ul>
        <li>
          <img src={camperId.image} alt={camperId.name} />
        </li>
        <li>
          <img src={camperId.image} alt={camperId.name} />
        </li>
        <li>
          <img src={camperId.image} alt={camperId.name} />
        </li>
      </ul>

      <p>Rating: {camperId.rating}</p>
      <p>Location: {camperId.location}</p>
      <p>Price: {formattedPrice}€</p>
      <p>Description: {camperId.description}</p>
    </div>
  );
};
 

export default CamperDetails