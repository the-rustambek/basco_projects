import "./ZakazHeader.css";
import Avatar from "../../Assets/Img/Avatar.svg"
import searchIcon from "../../Assets/Img/search1.png"
import { IoMdReorder } from "react-icons/io";
import Modal from "../Modal/Modal";
import { useState } from "react";
const ZakazHeader = () =>{
    const [accountModal,setAccountModal] = useState(false);
    function openAccountModal(){
        setAccountModal(!accountModal)
    }
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
  
    <div className="zakazHeader-account"  onClick={() =>openAccountModal()}>
        <img src={Avatar} alt="Avatar" className="zakazHeader-avatar" />
        <span className="zakazHeader-span">
            John Doe
        </span>
    </div>
    <Modal className="modal account-modal"
     show={accountModal} w={400} mh={185}>
    <button className="close-btn" onClick={()=>setAccountModal()}>
                    &times;
                </button>

                <form className="account-form">
                    <input type="password" className="account-input" required  placeholder="password" />
                    <button className="account-btn account-btns">
                        <span>
                        Edit
                        </span>
                    </button>

                </form>
                </Modal>
</header>
)
}
export default ZakazHeader;