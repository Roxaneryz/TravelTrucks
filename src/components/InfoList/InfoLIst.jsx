import Item from "./InfoItem/Item"


const InfoLIst = ({ camper }) => {
    console.log(camper);
    
  return (
    <div>
      {camper.AC && <Item title="AC" />}
      {camper.kitchen && <Item title="Kitchen" />}
      {camper.automatic && <Item title="Automatic" />}
      {camper.Tv && <Item title="Tv" />}
      {camper.gas && <Item title="Gas" />}
    </div>
  );
}

export default InfoLIst