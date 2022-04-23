import "./AktTable.css";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback, useState } from "react";
import baseUrl from "../../api/api"
const AktTable = () => {
const ref = createRef();
const scrollToBottomOfList =
useCallback(() => {
ref.current.scrollIntoView({
behavior: "smooth",
block: "end",
});
}, [ref]);

const handleButtonClick = useCallback(() => {
scrollToBottomOfList();

}, []);


const [firstDate, setFirstDate] = useState("");
const [secondDate, setSecondDate] = useState("");


const handleSubmit = async (e) => {
e.preventDefault();
try {


window.localStorage.setItem("login","+998913611633");
const login = window.localStorage.getItem("login")

console.log(firstDate,secondDate,login)
const response = await baseUrl.post(
"/webmijozsverka",
{
login,
firstDate,
secondDate

},
{
headers: {
authorization: "Basic bW9iaWw6MTIz",
"Content-Type": "application/json"
}

}
);


} catch (error) {

console.log(error);
}
};








return (
<>
  <div className="akt-top">
    <form className="akt-form" onSubmit={handleSubmit}>
      <input className="akt-input" onChange={(e)=> setFirstDate(e.target.value)} type="date" id="start"
      name="date-after" required placeholder="Date After" />
      <input onChange={(e)=> setSecondDate(e.target.value)} className="akt-input" type="date" id="start"
      name="date-after" required placeholder="Date After" />
      <button className="akt-btn" type="submit">
        <span>
          Submit
        </span>
      </button>
    </form>
  </div>
  <main className="akt-main">
    <div className='indicator 
zakaz-indicator1' onClick={handleButtonClick}>
      <img src={Arrow} alt="" />
    </div>
    <div className="valuta">
      сўм
    </div>
    <table>
      <thead>
        <tr>
          <th>ИД</th>
          <th>Сана</th>
          <th>Изоҳ</th>
          <th>Кирим</th>
          <th>Чиқим</th>
        </tr>
      </thead>

      <tbody className="tbody" ref={ref}>
        <tr id="tr-table">
          <td data-title="ID"></td>
          <td data-title="Sana">
            <b>01.01.22</b>
          </td>
          <td data-title="izoh">
            <b>Кун бошига қолдиқ</b>
          </td>
          <td data-title="Kirim" colSpan="2">
            <b>300.000.000</b>
          </td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr>
          <td data-title="ID">6</td>
          <td data-title="Sana">12:13-12.05.2021</td>
          <td data-title="izoh">Lux soft memory</td>
          <td data-title="Kirim">1 600 000 сўм</td>
          <td data-title="Chiqim">3 200 000 сўм</td>
        </tr>
        <tr className="tr-jami">
          <td data-title="izoh" colSpan="3">
            <b>ЖАМИ</b>
          </td>
          <td data-title="Kirim">
            <b>16 000 000 сўм</b>
          </td>
          <td data-title="Chiqim">
            <b>72 000 000 сўм</b>
          </td>
        </tr>
        <tr className="tr-jami1">
          <td data-title="Sana"></td>
          <td data-title="izoh">
            <b>01.04.22</b>
          </td>
          <td data-title="Kirim">
            <b>Кун охирги қолдиқ</b>
          </td>
          <td data-title="Chiqim" colSpan="2">
            <b>243 400 000</b>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</>
);
};
export default AktTable;