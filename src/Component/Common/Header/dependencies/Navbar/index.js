import DropDown from '../Dropdown'

const Navbar =  (props) =>{
    const navItems =  props.navData
    return (
         navItems ?
            <nav>
                <ul>
                    {navItems.map((item) => {
                        return (<li><a href={item.url}>
                            {item.name}
                            {item.dropdown ? <DropDown dropdownItems={item.dropdown} /> : null}
                            </a></li>
                            )
                    })}
                </ul>
            </nav> : null 
    )
}

export default  Navbar;