import React, { useState } from 'react';
import '../table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn ,faToggleOff} from '@fortawesome/free-solid-svg-icons';

const Table = () => {
  const [rows, setRows] = useState([
    {
      id: 1392,
      name: 'James Yates',
      occupation: 'Web Designer',
      contact: '+63 983 0962 971',
      education: 'NY University',
      isSelected: false,
      isToggled: false, // Yeni state
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


  const handleCheckboxChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isSelected: !row.isSelected } : row
      )
    );
  };

  const handleToggleChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isToggled: !row.isToggled } : row
      )
    );
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Order</th>
          <th>Name</th>
          <th>Occupation</th>
          <th>Contact</th>
          <th>Education</th>
          <th>
            <input type="checkbox" />
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={row.isSelected}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.occupation}</td>
            <td>{row.contact}</td>
            <td>{row.education}</td>
            <td className="toggle">
              <FontAwesomeIcon icon={row.isToggled ? faToggleOn : faToggleOff} 
              style={{ color: 'black',backgroundColor:' rgb(255, 183, 68) ' , padding: '5px', borderRadius: '5px', cursor: 'pointer'}}
              onClick={() => handleToggleChange(row.id)}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;