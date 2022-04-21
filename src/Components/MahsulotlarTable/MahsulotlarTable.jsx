import "./MahsulotlarTable.css"
import deleteIcon from "../../Assets/Img/Delete.svg";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback, useState } from "react";

const MahsulotlarTable = () =>{

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
<main className="mahsulotlar-main">
  <div className='indicator 
zakaz-indicator' onClick={handleButtonClick}>
    <img src={Arrow} alt="" />
  </div>
  <table>
    <thead>
      <tr>
        <th>№</th>
        <th>
          Маҳсулот тури
        </th>
        <th>
          Товар номи
        </th>
        <th>
          Ўлчов бирлиги
        </th>
        <th>
          Остатка
        </th>
        <th>
          Нархи
        </th>
        <th>
          Сони
        </th>
        <th>Ўчириш</th>
      </tr>
    </thead>

    <tbody className="tbody" ref={ref}>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
      <tr>
        <td>1</td>
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
          <button className="delete-btn">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>

</main>

)
}

export default MahsulotlarTable;