import React, { useState } from "react";

function CRUD() {
  const [name, setName] = useState();
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    allData.splice(index, 1);
    setAllData([...allData]);
  };

  const handleEdit = (i) => {
    setName(allData[i]);
    setShow(true);
    setEditIndex(i);
  };
  const handleUpdate = () => {
    allData.splice(editIndex, 1, name);
    setAllData([...allData]);
    setShow(false);
    setName("");
  };

  return (
    <div className="crud-page">
      <input
        className="name"
        id="name"
        value={name}
        placeholder="Enter the Name"
        onChange={(e) => setName(e.target.value)}
      />
      {!show ? (
        <button
          type="button"
          id="button"
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          id="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      )}

      {allData.map((e, index) => (
        <div>
          <h2>{e}</h2>
          <button
            type="button"
            className="btn btn-light edit"
            onClick={() => handleEdit(index)}
          >
            <span>📝</span>
          </button>
          <button
            type="button"
            className="btn btn-light delete"
            onClick={() => handleDelete(index)}
          >
            <span>❌</span>
          </button>
        </div>
      ))}
    </div>
  );
}
export default CRUD;
