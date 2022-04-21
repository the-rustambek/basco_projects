import "./ZakazTable.css";
import refresh from "../../Assets/Img/refresh.png";
// import { useState } from "react";
import Arrow from "../../Assets/Img/Arrow.png";
import { createRef, useCallback, useState } from "react";


const ZakazTable = () =>{
// const [minus, setMinus] = useState(0);

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
<main className="zakaz-main">
<div className='indicator 
zakaz-indicator' 
onClick={handleButtonClick}>
  <img src={Arrow} alt="" />
  </div>
  <table>
    <thead>
      <tr>
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
        <th></th>
      </tr>
    </thead>

    <tbody className="tbody" ref={ref}>
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