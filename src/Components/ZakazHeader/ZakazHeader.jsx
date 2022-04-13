import "./ZakazHeader.css";
import Avatar from "../../Assets/Img/Avatar.svg"
import searchIcon from "../../Assets/Img/search1.png"
import { IoMdReorder } from "react-icons/io";

const ZakazHeader = () =>{
return (
<header className="zakazHeader">
    <div className="zakaz-left">
    <button className="menu-btns">
        <IoMdReorder className="menu-icon" />
    </button>
    <form className="zakazHeader-form">
        <input type="text" className="zakazHeader-input" placeholder="Search" required />
        <img src={searchIcon} alt="search" className="zakazHeader-search" />
    </form>
    <select>
        <option value="Group Filter">Group Filter</option>
        <option value="Mevalar">Mevalar</option>
    </select>
    </div>
  
    <div className="zakazHeader-account">
        <img src={Avatar} alt="Avatar" className="zakazHeader-avatar" />
        <span className="zakazHeader-span">
            John Doe
        </span>
    </div>
</header>
)
}
export default ZakazHeader;