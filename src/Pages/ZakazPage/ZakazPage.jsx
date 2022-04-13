import ZakazHeader from "../../Components/ZakazHeader/ZakazHeader";
import ZakazTable from "../../Components/ZakazTable/ZakazTable";
import "./ZakazPage.css";

const ZakazPage = () =>{
return (
<div className="zakaz-page">
    <ZakazHeader />
    <ZakazTable />

    <button className="zakaz-button">
        Buyurtma berish
    </button>
</div>
)
}

export default ZakazPage;