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
             Умумий товарлар ҳақида :
             </h3>
             <form className="mahsulotlar-form">
                 <label >
             <input className="mahsulotlar-input" type="date" id="start" name="date-before" 
                placeholder="Date" required />
                <textarea required placeholder="Izoh..." className="mahsulotlar-textarea"></textarea>
                </label>
                <div className="mahsulotlar-box">
                    <p>Сони:   25 </p>
                    <p>Умумий суммаси: 5200000</p>
                </div>
                <button className="mahsulotlar-btn">
                    <span>
                    Буюртма бериш
                    </span>
                </button>
             </form>
         </div>
         </>
     )
}
export default MahsulotlarPage;