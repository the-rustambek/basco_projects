import AktTable from "../../Components/AktTable/AktTable";
import Header from "../../Components/Header/Header";
import "./AktPage.css";

const AktPage = () =>{
return(
<section className="akt">
<Header />
    <div className="akt-top">
        <form className="akt-form">

            {/* <input type="text" data-role="calendarpicker" placeholder="alooo" /> */}
            <input className="akt-input" type="date" id="start" name="date-after" required placeholder="Date After" />
     
            {/* <p className="akt-text">Date Before</p> */}
            <input className="akt-input" type="date" id="start" name="date-after" required placeholder="Date After" />
            <button className="akt-btn">
                <span>
                Submit
                </span>
            </button>
        </form>
    </div>
    <AktTable />
</section>
)
}

export default AktPage;