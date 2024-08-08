import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../context_menu.css';
const DragAndDropTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const  [contextMenu , setContextMenu] = useState({visible:false,x:0,y:0});


  // useEffect(() => {

  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/admin/productsBySiraid');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     console.error('Error fetching data', error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleOnDragEnd = async (result) => {
  //   if (!result.destination) return;

  //   const items = Array.from(data);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setData(items);
  // };

  const handleContextMenu = (event)=>{
    event.preventDefault();
    setContextMenu({
      visible:true,
      x:event.clientX,
      y:event.clientY,
    });
  };

  // const handleSave = async () => {
  

  //   // try {
  //   //   const response = await fetch('http://localhost:5000/api/admin/products/yeniSira', {
  //   //     method: 'PUT',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //     body: JSON.stringify({ products: data}),
  //   //   });

  //   //   fetchData();
  //   //   if (!response.ok) {
  //   //     throw new Error('Network response was not ok');
  //   //   }
  //   // } catch (error) {
  //   //   console.error('Error updating data', error);
  //   //   setError(error.message);
  //   // }
  // };

  const handleClickOutside = ()=>{
    setContextMenu({visible:false, x:15, y:0});
  };

  useEffect(()=>{
    document.addEventListener('click',handleClickOutside);
    return ()=>{
      document.removeEventListener('click',handleClickOutside);
    };  
  },[]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div onContextMenu={handleContextMenu} style={{position:'relative'}}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <table {...provided.droppableProps} ref={provided.innerRef} className='table'>
              <thead className="table-column">
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Sıra id</th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ product_id,product_name, description, price, sira_id }, index) => (
                  <Draggable key={product_id} draggableId={product_id.toString()} index={index}>
                    {(provided,snapshot) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`draggable-row ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <td>{product_name}</td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td>{sira_id}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </table>
          )}
        </Droppable>
      </DragDropContext>
      {contextMenu.visible && (
          <div
            className="context-menu"
            style={{ top: contextMenu.y-40,left: contextMenu.x-350 }}
          >
            <div className="context-menu__item" onClick={handleSave}>
              Kaydet
            </div>
            <div className="context-menu__item2">
              Görüntüle
            </div>
            <div className="context-menu__item3">
              Sil
            </div>
          </div>
        )}
    </div>
  );
};

export default DragAndDropTable;
