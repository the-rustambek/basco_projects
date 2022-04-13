import ZakazHeader from "../../Components/ZakazHeader/ZakazHeader";
import ZakazTable from "../../Components/ZakazTable/ZakazTable";
import "./ZakazPage.css";

const ZakazPage = () =>{
return (
<>
    <ZakazHeader />
    <ZakazTable />

    <button className="zakaz-button">
        Buyurtma berish
    </button>
</>
)
}

export default ZakazPage;