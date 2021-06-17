import React from "react";
import { useState } from "react";
import "./Todolist.css";
function Todolist() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const addItem =(event) => {
      setItem(event.target.value);
  }
  const addItemToList = () => {
      setItemList((prevValue)=>{
          return [...prevValue,item]
      })
      setItem("");
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter a task" onChange={addItem} value={item} />
        <button onClick={addItemToList}>Add</button>
        <br />
        <div className="list_div">
          <ul>
            {itemList.map((items)=>{return <li> {items}</li>;})}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;

// import React, { useState } from "react";
// import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
// import "./Todolist.css";
// function Todolist() {
//   const [item, setItem] = useState("");
//   const [itemList, setItemList] = useState([]);
//   const itemEvent = (event) => {
//     setItem(event.target.value);
//   };
//   const listOfItems = () => {
//       setItemList((prevItems)=>{
//           return [...prevItems,item]
//       })
//       setItem("");
//   }
//   return (
//     <div className="main_div">
//       <div className="center_div">
//         <br />
//         <h1>Todo List</h1>
//         <br />
//         <div className="input_div">
//           <input
//             type="text"
//             name="item"
//             id="item"
//             placeholder="Add an Item"
//             onChange={itemEvent}
//             value={item}
//           />
//           <button onClick={listOfItems}>Add</button>
//         </div>
//         <br />
//         <ul>
//           {itemList.map((item)=>{
//               return <li>{item}</li>})}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Todolist;
