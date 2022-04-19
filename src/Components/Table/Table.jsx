import { createRef, useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import "./Table.css";
import Arrow from "../../Assets/Img/Arrow.png";
const Table = () =>{

const [tableModal,setTableModal] = useState(false)

function openTableModal(){
setTableModal(!tableModal);
}

const ref = createRef();
const scrollToBottomOfList = useCallback(() => {
ref.current.scrollIntoView({
behavior: "smooth",
block: "end",
});
}, [ref]);

const handleButtonClick = useCallback(() => {
scrollToBottomOfList();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return(

<main className="buyurtmalar-main">
  <div className='indicator' onClick={handleButtonClick}>
  <img src={Arrow} alt="" />
  </div>
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

    <tbody className="tbody" ref={ref}>

      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr><tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr><tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr><tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr><tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
        </td>
      </tr><tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
          <button className="table-completed--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-completed">
            Completed
          </span>
          </button>
          
        </td>
      </tr>
      <tr className="tr" id="tr1">
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
          <button className='button button1'>
            <span>
            Buyurtma berish
          </span></button>
        </td>
        <td>
        <button className="table-uncompleted--btn">
          <span onClick={()=> openTableModal()} className="buyurtma-uncompleted">
            UnCompleted
          </span>
          </button>
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
          Mahsulot turi
        </h2>
        <p className="modalTable-text">
          Tovar nomi
        </p>
        <p className="modalTable-olchov">Ostatka</p>
        <p className="modalTable-cost">
          Narxi
        </p>
        <p className="modalTable-count">
          Soni
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