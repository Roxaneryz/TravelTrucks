import css from "./Checkbox.module.css"

const Checkbox = ({ title, value, image, isActive, handleClick}) => {
    
    const checkboxClassName = isActive ? css.active : css.inActive;
  return (
    <div className={checkboxClassName} onClick={handleClick}>{title}</div>
  )
}

export default Checkbox