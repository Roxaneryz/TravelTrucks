// import svg from ""
const svg = "";

const SvgIcon = ({iconName}) => {
  return (
      <div><svg>
          <use href={`${svg}#${iconName}`}>
              
          </use>
      </svg></div>
  )
}

export default SvgIcon