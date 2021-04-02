const Logo =  (props) =>{
    const logo =  props.img
    return (
         <div className="logo">
            <img src={logo} alt="kanter" />
        </div>
    )
}

export default Logo;