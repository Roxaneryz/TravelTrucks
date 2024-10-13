import css from "./CamperDetails.module.css"



const CamperDetails = ({ camper }) => {

  const formattedPrice = camper.price.toFixed(2);

  return (
    <div className={css.camperDetails}>
      <h3>{camper.name}</h3>
      <ul>
        {camper.images.map((image, index) => (
          <li key={index}>
            <img src={image} alt={camper.name} />
            
          </li>
        ))}
      </ul>

      <p>Rating: {camper.rating}</p>
      <p>Location: {camper.location}</p>
      <p>Price: {formattedPrice}€</p>
      <p>Description: {camper.description}</p>
    </div>
  );
};
 

export default CamperDetails