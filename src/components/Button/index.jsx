const Button = ({ onClick, text, icon}) => {
  return(  
  <button className="Button" onClick={onClick}>{text}{icon}</button>
)
}

export default Button