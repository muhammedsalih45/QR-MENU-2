import React, { useState } from 'react';
import '../table.css';
const Table = () => {
  const [rows, setRows] = useState([
    {
      id: 1392,
      name: 'James Yates',
      occupation: 'Web Designer',
      contact: '+63 983 0962 971',
      education: 'NY University',
      isSelected: false,
    },
    {
      id: 4616,
      name: 'Matthew Wasil',
      occupation: 'Graphic Designer',
      contact: '+02 020 3994 929',
      education: 'London College',
      isSelected: false,
    },
    {
      id: 9841,
      name: 'Sampson Murphy',
      occupation: 'Mobile Dev',
      contact: '+01 352 1125 0192',
      education: 'Senior High',
      isSelected: false,
    },
    {
      id: 9548,
      name: 'Gaspar Semenov',
      occupation: 'Illustrator',
      contact: '+92 020 3994 929',
      education: 'College',
      isSelected: false,
    },
    {
      id: 4616,
      name: 'Matthew Wasil',
      occupation: 'Graphic Designer',
      contact: '+02 020 3994 929',
      education: 'London College',
      isSelected: false,
    },
    {
      id: 9841,
      name: 'Sampson Murphy',
      occupation: 'Mobile Dev',
      contact: '+01 352 1125 0192',
      education: 'Senior High',
      isSelected: false,
    },
    {
      id: 9548,
      name: 'Gaspar Semenov',
      occupation: 'Illustrator',
      contact: '+92 020 3994 929',
      education: 'College',
      isSelected: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isSelected: !row.isSelected } : row
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
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;