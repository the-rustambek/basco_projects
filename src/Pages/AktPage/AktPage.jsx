import AktTable from "../../Components/AktTable/AktTable";
import "./AktPage.css";

const AktPage = () =>{
return(
<section className="akt">
    <div className="akt-top">
        <form className="akt-form">

            {/* <input type="text" data-role="calendarpicker" placeholder="alooo" /> */}
            <input className="akt-input" type="date" id="start" name="date-before" value="Date before"
                placeholder="Date Before" required />
            {/* <p className="akt-text">Date Before</p> */}
            <input className="akt-input" type="date" id="start" name="date-after" required placeholder="Date After" />
            <button className="akt-btn">
                Submit
            </button>
        </form>
    </div>
    <AktTable />
</section>
)
}

export default AktPage;