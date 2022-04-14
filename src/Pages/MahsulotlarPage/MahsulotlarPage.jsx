import Header from "../../Components/Header/Header";
import MahsulotlarTable from "../../Components/MahsulotlarTable/MahsulotlarTable";
import "./MahsulotlarPage.css"

const MahsulotlarPage = () =>{
     return (
         <>
         <Header />
         <MahsulotlarTable />
         <div className="mahsulotlar-bottom">
             <h3 className="mahsulotlar-title">
             Umumiy tovarlar haqida :
             </h3>
             <form className="mahsulotlar-form">
                 <label >
             <input className="mahsulotlar-input" type="date" id="start" name="date-before" 
                placeholder="Date" required />
                <textarea required placeholder="Izoh..." className="mahsulotlar-textarea"></textarea>
                </label>
                <div className="mahsulotlar-box">
                    <p>Soni:   25 </p>
                    <p>Umumiy summasi: 6598018621</p>
                </div>
                <button className="mahsulotlar-btn">
                    Buyurtma berish
                </button>
             </form>
         </div>
         </>
     )
}
export default MahsulotlarPage;