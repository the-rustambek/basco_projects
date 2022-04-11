import "./Table.css";

const Table = () =>{
return(
<main>
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
      <tr>
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
          <label className="switch" data-id="1">
            <input type="checkbox"     />
            <span className="slider round"></span>
          </label>
        </td>
      </tr>
      <tr>
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
          <label className="switch" data-id="1">
            <input type="checkbox"     />
            <span className="slider round"></span>
          </label>
        </td>
      </tr><tr>
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
          <label className="switch" data-id="1">
            <input type="checkbox"     />
            <span className="slider round"></span>
          </label>
        </td>
      </tr><tr>
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
          <label className="switch" data-id="1">
            <input type="checkbox"     />
            <span className="slider round"></span>
          </label>
        </td>
      </tr><tr>
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
          <label className="switch" data-id="1">
            <input type="checkbox"     />
            <span className="slider round"></span>
          </label>
        </td>
      </tr><tr>
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
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </td>
      </tr>

    </tbody>
  </table>

</main>

)
}

export default Table;