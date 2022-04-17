import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Table.css";

const Table = () =>{

const [tableModal,setTableModal] = useState(false)

function openTableModal(){
setTableModal(!tableModal);
}

return(
<main className="buyurtmalar-main">
  <table>
    <thead>
      <tr>
        <th>
          ID
        </th>
        <th>
          Sana
        </th>
        <th>
          Tovarlar soni
        </th>
        <th>
          Jami summa
        </th>
        <th></th>
        <th>

        </th>
      </tr>
    </thead>

    <tbody className="tbody">
      <tr onClick={()=> openTableModal()}>
        <td data-title='ID'>
          6
        </td>
        <td data-title='Sana'>
          12:13-12.05.2021
        </td>
        <td data-title='Tovarlar Soni'>
          10
        </td>
        <td data-title='Jami Summa'>
          1 600 000 so’m
        </td>
        <td className='select'>
          <button className='button'>
            Buyurtma berish
          </button>
        </td>
        <td>
          <span className="buyurtma-completed">
            Completed
          </span>
        </td>
      </tr>
      <tr onClick={()=> openTableModal()}>
        <td data-title='ID'>
          6
        </td>
        <td data-title='Sana'>
          12:13-12.05.2021
        </td>
        <td data-title='Tovarlar Soni'>
          10
        </td>
        <td data-title='Jami Summa'>
          1 600 000 so’m
        </td>
        <td className='select'>
          <button className='button'>
            Buyurtma berish
          </button>
        </td>
        <td>
          <span className=" buyurtma-uncompleted">
            UnCompleted
          </span>
        </td>
      </tr>
    </tbody>
  </table>

  <Modal className="modal table-modal" show={tableModal} w={800} mh={300}>
    <button className=" close-btn modalClose-btn" onClick={()=>setTableModal()}>
      &times;
    </button>
    <ul className="modalTable-list">
    <li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li>
      <li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li><li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li>
      <li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li>
      <li className="modalTable-item">
        <h2 className="modalTable-title">
          Mevalar
        </h2>
        <p className="modalTable-text">
          Olchalar
        </p>
        <p className="modalTable-olchov">105 Kg</p>
        <p className="modalTable-cost">
          1 600 000 so’m
        </p>
        <p className="modalTable-count">
          3
        </p>
      </li>
    </ul>
  </Modal>

</main>


)
}

export default Table;