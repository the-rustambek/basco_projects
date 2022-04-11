import "./Header.css";
import Avatar from "../../Assets/Img/Avatar.svg"
import searchIcon from "../../Assets/Img/search1.png"
import { IoMdReorder } from "react-icons/io";

const Header = () =>{
return (
<header className="header">
    <button className="menu-btns">
        <IoMdReorder className="menu-icon" />
    </button>
    <form className="header-form">
        <input type="text" className="header-input" placeholder="Search" required />
        <img src={searchIcon} alt="search" className="header-search" />
    </form>
    <div className="header-account">
        <img src={Avatar} alt="Avatar" className="header-avatar" />
        <span className="header-span">
            John Doe
        </span>
    </div>
</header>
)
}
export default Header;