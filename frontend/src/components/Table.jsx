import React, { useState, useEffect } from 'react';
import '../table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
  const [rows, setRows] = useState([
    {
      id: 1392,
      name: 'James Yates',
      occupation: 'Web Designer',
      contact: '+63 983 0962 971',
      education: 'NY University',
      isSelected: false,
      isToggled: false,
    },
    {
      id: 4616,
      name: 'Matthew Wasil',
      occupation: 'Graphic Designer',
      contact: '+02 020 3994 929',
      education: 'London College',
      isSelected: false,
      isToggled: false,
    },
    {
      id: 9841,
      name: 'Sampson Murphy',
      occupation: 'Mobile Dev',
      contact: '+01 352 1125 0192',
      education: 'Senior High',
      isSelected: false,
      isToggled: false,
    },
    {
      id: 9548,
      name: 'Gaspar Semenov',
      occupation: 'Illustrator',
      contact: '+92 020 3994 929',
      education: 'College',
      isSelected: false,
      isToggled: false,
    },
    {
      id: 4616,
      name: 'Matthew Wasil',
      occupation: 'Graphic Designer',
      contact: '+02 020 3994 929',
      education: 'London College',
      isSelected: false,
      isToggled: false,
    },
    {
      id: 9841,
      name: 'Sampson Murphy',
      occupation: 'Mobile Dev',
      contact: '+01 352 1125 0192',
      education: 'Senior High',
      isSelected: false,
      isToggled: false,
    },
    {
      id: 9548,
      name: 'Gaspar Semenov',
      occupation: 'Illustrator',
      contact: '+92 020 3994 929',
      education: 'College',
      isSelected: false,
      isToggled: false,
    },
  ]);

  const handleCheckboxChange = id => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id ? { ...row, isSelected: !row.isSelected } : row,
      ),
    );
  };

  const handleToggleChange = id => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id ? { ...row, isToggled: !row.isToggled } : row,
      ),
    );
  };

  return (
    <div>
      <div className="btn-group" role="group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          b
        >
          + Ekle
        </button>
        <ul class="dropdown-menu">
          <li className="list" onClick={() => setShowProductModal(true)}>
            Ürün
          </li>
          <li className="list" onClick={() => setShowCategoryModal(true)}>
            Kategori
          </li>
        </ul>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
                name="option1"
                value="something"
              />
            </th>
            <th>İsim</th>
            <th>aciklama</th>
            <th>fiyat</th>
            <th>kategori id</th>
            <th>Görünürlük</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr
              key={row.id}
              className={row.isToggled ? 'faded disabled' : ''}
              id="table-column"
            >
              <td>
                <input
                  className="form-check-input table-checkbox-left"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  checked={row.isSelected}
                  onChange={() => handleCheckboxChange(row.id)}
                  disabled={row.isToggled}
                />
              </td>
              <td>{row.name}</td>
              <td>{row.occupation}</td>
              <td>{row.contact}</td>
              <td>{row.education}</td>
              <td className="toggle">
                <FontAwesomeIcon
                  icon={row.isToggled ? faToggleOn : faToggleOff}
                  onClick={() => handleToggleChange(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
