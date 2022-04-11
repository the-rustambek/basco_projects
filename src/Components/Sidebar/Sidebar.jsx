import "./Sidebar.css";
import BascoLogo from "../../Assets/Img/BascoLogo.png"
import Akt from "../../Assets/Img/akt.svg";
import buyurtma from "../../Assets/Img/buyurtma.svg";
import mahsulot from "../../Assets/Img/mahsulot.svg";
import menu from "../../Assets/Img/menu.png";
import { Link } from "react-router-dom";
import { IoMdReorder } from "react-icons/io";
import { useContext, useEffect, useRef } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";

import { MenuController } from "../../Context/menuController";
const Sidebar = () =>{

const handleAddClass = (event)=>{
const links = document.querySelectorAll(".sidebar-active");

links.forEach((link) =>{
link.classList.remove("sidebar-active");
});
event.currentTarget.classList.add("sidebar-active")
}

    

// const [state, setState] = useContext(MenuController);

return(
<section className="sidebar" >
    <div className="sidebar-top">
    <button className="menu-btn"  >
    <IoMdReorder className="menu-icon" />
    </button>
        <a href="#" className="sidebar-logo">
            <img src={BascoLogo} alt="basco logosi bor" className="sidebar-img" />
        </a>
    </div>
    <ul className="sidebar-list">
        <li className="sidebar-item">
            <Link onClick={handleAddClass} to="/buyurtmalar" className="sidebar-link sidebar-active">
            <img src={buyurtma} alt="buyurtma" className="sidebar-icon" />
            <p className="sidebar-title">Buyurtmalar</p>
            </Link>
        </li>
        <li className="sidebar-item">
            <Link onClick={handleAddClass} to="/akt" className="sidebar-link">
            <FaRegCalendarAlt />
            <p className="sidebar-title">Akt Sverka</p>
            </Link>
        </li>
        <li className="sidebar-item">
            <Link onClick={handleAddClass} to="/zakaz" className="sidebar-link">
            {/* <img src={menu} alt="zakaz" className="sidebar-icon" /> */}
            <IoMdReorder className="zakaz-icon" />
            <p className="sidebar-title">Zakaz berish</p>
            </Link>
        </li>
        <li className="sidebar-item">
            <Link onClick={handleAddClass} to="/mahsulotlar" className="sidebar-link">
            <img src={mahsulot} alt="mahsulot" className="sidebar-icon" />
            <p className="sidebar-title">Mahsulotlar</p>
            </Link>
        </li>
    </ul>


</section>
)
}

export default Sidebar;