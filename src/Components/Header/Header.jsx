import "./Header.css";
import Avatar from "../../Assets/Img/Avatar.svg"
import searchIcon from "../../Assets/Img/search1.png"
import { IoMdReorder } from "react-icons/io";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Header = () =>{
const [accountModal,setAccountModal] = useState(false);
function openAccountModal(){
setAccountModal(!accountModal)
}
return (
<header className="header">
    <button className="menu-btns">
        <IoMdReorder className="menu-icon" />
    </button>
    <form className="header-form">
        <input type="text" className="header-input" placeholder="Search" required />
        <img src={searchIcon} alt="search" className="header-search" />
    </form>
    <div className="header-account" onClick={()=>openAccountModal()}>
        <img src={Avatar} alt="Avatar" className="header-avatar" />
        <span className="header-span">
            John Doe
        </span>
    </div>

    <Modal className="modal account-modal" show={accountModal} w={450} mh={208}>
        <button className="close-btn" onClick={()=>setAccountModal()}>
            &times;
        </button>

        {/* <h2 class>Tahrirlash</h2> */}

        <form className="account-form">
            <input type="password" className="account-input" required placeholder="password" />
            <button className="account-btn">
                <span>Edit</span>
            </button>

        </form>
    </Modal>

</header>



)
}
export default Header;