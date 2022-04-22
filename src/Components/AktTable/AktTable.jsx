import "./AktTable.css";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback, useState } from "react";

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
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  return (
    <main className="akt-main">
      <div className='indicator 
zakaz-indicator1' 
onClick={handleButtonClick}>
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
          <tr id="tr-table" style={{backgroundColor:"red"}}>
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
          </tr> <tr>
            <td data-title="ID">6</td>
            <td data-title="Sana">12:13-12.05.2021</td>
            <td data-title="izoh">Lux soft memory</td>
            <td data-title="Kirim">1 600 000 сўм</td>
            <td data-title="Chiqim">3 200 000 сўм</td>
          </tr> <tr>
            <td data-title="ID">6</td>
            <td data-title="Sana">12:13-12.05.2021</td>
            <td data-title="izoh">Lux soft memory</td>
            <td data-title="Kirim">1 600 000 сўм</td>
            <td data-title="Chiqim">3 200 000 сўм</td>
          </tr> <tr>
            <td data-title="ID">6</td>
            <td data-title="Sana">12:13-12.05.2021</td>
            <td data-title="izoh">Lux soft memory</td>
            <td data-title="Kirim">1 600 000 сўм</td>
            <td data-title="Chiqim">3 200 000 сўм</td>
          </tr> <tr>
            <td data-title="ID">6</td>
            <td data-title="Sana">12:13-12.05.2021</td>
            <td data-title="izoh">Lux soft memory</td>
            <td data-title="Kirim">1 600 000 сўм</td>
            <td data-title="Chiqim">3 200 000 сўм</td>
          </tr> <tr>
            <td data-title="ID">6</td>
            <td data-title="Sana">12:13-12.05.2021</td>
            <td data-title="izoh">Lux soft memory</td>
            <td data-title="Kirim">1 600 000 сўм</td>
            <td data-title="Chiqim">3 200 000 сўм</td>
          </tr> <tr>
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
  );
};
export default AktTable;