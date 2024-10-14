import SvgIcon from "../../SvgIcon/SvgIcon"


const InfoItem = ({title, image}) => {
  return (
      <div>
      {title}
      <SvgIcon iconName={image}/>
    </div>
  )
}

export default InfoItem