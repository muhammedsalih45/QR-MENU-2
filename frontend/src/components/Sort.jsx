
// // src/components/Table.jsx
// import React, { useState, useEffect } from 'react';
// import '../table2.css';


// const Sort = () => {
//   const [rows, setRows] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/products');
//       if (!response.ok) {
//         throw new Error('Verileri çekmede bir hata oluştu');
//       }
//       const data = await response.json();
//       setRows(data);
//     } catch (error) {
//       console.error('Bir hata oluştu', error);
//       setError('Veriler alınamadı. Lütfen tekrar deneyin.');
//     }
//   };

//   return (
//     <div>
      
//       <table className="table">
//         <thead className="table-column">
//           <tr>
           
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map(row => (
//             <tr key={row.product_id} > 
             
//               <td>{row.product_name}</td>
//               <td>{row.description}</td>
//               <td>{row.price}</td>
//               <td>{row.category ? row.category.category_name : 'Kategori Yok'}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Sort;



