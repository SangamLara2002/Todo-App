import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css"
const Todo = () => {
  const [inputData, getInputdata] = useState("");
  const [data, getdata] = useState([]);
  // function get(val){
  //   getInputdata(val.target.value);
  //   console.log(data);
  // }

  function change() {
    if (inputData) {
      const items={
        id:new Date().getTime().toString(),
        name:inputData,
        };
      getdata([items, ...data]);
      getInputdata("");
    } else {
      alert("Please add Item first");
    }
  }
const del=(id1)=>{
    const updatedItems=data.filter( (e) =>{
      return e.id !== id1;
    })
    console.log(id1);
    getdata(updatedItems);
}

  return (
    <>
      <div
        style={{ backgroundColor: "burlywood" }}
        className="w-50 mx-auto my-5 py-2"
      >
        <div className="cntr">
        <h1>ToDo App</h1>
          <input
            type="text"
            placeholder="Add Task"
            className="inp"
            onChange={(val) => {
              getInputdata(val.target.value);
            }}
          />
          <button onClick={change}>
            Add
          </button>
        </div>
        {data.map((currElem, key) => {
          return (
            <>
              <div className="items">
                {currElem.name}
                <button style={{marginLeft:"100%",backgroundColor:"aquamarine"}} onClick={()=>del(currElem.id)}>Del</button>
              </div>
              
            </>
          );
        })}
      </div>
    </>
  );
};
export default Todo;
