import ZakazHeader from "../../Components/ZakazHeader/ZakazHeader";
import ZakazTable from "../../Components/ZakazTable/ZakazTable";
import "../../Components/ZakazTable/ZakazTable.css"

const ZakazPage = () =>{
return (
<div className="zakaz-page">
    <ZakazHeader />
    <ZakazTable />

    <button className="zakaz-button">
        <span>
        Buyurtma berish
        </span>
    </button>
</div>
)
}

export default ZakazPage;