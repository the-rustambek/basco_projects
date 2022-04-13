import "./ZakazTable.css";
import refresh from "../../Assets/Img/refresh.png";
// import { useState } from "react";
const ZakazTable = () =>{
  // const [minus, setMinus] = useState(0);
  
     return (
        <main className="zakaz-main">
  <table>
    <thead>
      <tr>
        <th>
          Mahsulot turi
        </th>
        <th>
          Tovar nomi
        </th>
        <th>
          O'lchov birligi
        </th>
        <th>
          Ostatka
        </th>
        <th>
            Narxi
        </th>
        <th>
            Soni
        </th>
        <th></th>
      </tr>
    </thead>

    <tbody className="tbody">
    <tr>
        <td data-title='Mevalar'>
          Mevalar
        </td>
        <td data-title='Anor'>
          Anor
        </td>
        <td data-title="O'lchov birligi">
          Kg
        </td>
        <td data-title='Ostatka'>
          100.5
        </td>
        <td className="narxi">
            1 600 000
        </td>
        <td className='count-td'>
          <button className='minus-btn'>
              -
          </button>
          <div className="zakaz-count">
              2
          </div>
          <button className="plus-btn">
              +
          </button>
        </td>
        <td>
            <button className="refresh-btn">
                <img src={refresh} alt="refresh" className="refresh-icon" />
            </button>
        </td>
    
      </tr>  <tr>
        <td data-title='Mevalar'>
          Mevalar
        </td>
        <td data-title='Anor'>
          Anor
        </td>
        <td data-title="O'lchov birligi">
          Kg
        </td>
        <td data-title='Ostatka'>
          100.5
        </td>
        <td className="narxi">
            1 600 000
        </td>
        <td className='count-td'>
          <button className='minus-btn'>
              -
          </button>
          <div className="zakaz-count">
              2
          </div>
          <button className="plus-btn">
              +
          </button>
        </td>
        <td>
            <button className="refresh-btn">
                <img src={refresh} alt="refresh" className="refresh-icon" />
            </button>
        </td>
    
      </tr>
      <tr>
        <td data-title='Mevalar'>
          Mevalar
        </td>
        <td data-title='Anor'>
          Anor
        </td>
        <td data-title="O'lchov birligi">
          Kg
        </td>
        <td data-title='Ostatka'>
          100.5
        </td>
        <td className="narxi">
            1 600 000
        </td>
        <td className='count-td'>
          <button className='minus-btn'>
              -
          </button>
          <div className="zakaz-count">
              2
          </div>
          <button className="plus-btn">
              +
          </button>
        </td>
        <td>
            <button className="refresh-btn">
                <img src={refresh} alt="refresh" className="refresh-icon" />
            </button>
        </td>
    
      </tr>
      
    </tbody>
  </table>

</main>
     )
}

export default ZakazTable;