import logo1 from '../../../assests/images/logo192.png';
import Navbar from './dependencies/Navbar';
import Logo from './dependencies/Logo';
import navList from './dependencies/mock/nav.json'

const Header = (props) => {

    return (
        <div className="header-top">
            <Logo img={logo1} />
            <Navbar navData={navList} />
        </div>
        )
}

export default  Header;