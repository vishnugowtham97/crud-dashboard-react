import React, { useState } from "react";

function Layout() {
  const [email, setEmail] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAdd = () => {
    if (email.length !== 0) {
      setAllData((newData) => [...newData, email]);
      setEmail("");
    }
  };

  const handleDelete = (index) => {
    allData.splice(index, 1);
    setAllData([...allData]);
  };

  const handleEdit = (i) => {
    setEmail(allData[i]);
    setShow(true);
    setEditIndex(i);
  };
  const handleUpdate = () => {
    allData.splice(editIndex, 1, email);
    setAllData([...allData]);
    setShow(false);
    setEmail("");
  };

  return (
    <div className="crud-page">
      <input
        className="name"
        id="email"
        type="text"
        value={email}
        placeholder="Enter the Email _ID_"
        onChange={(e) => setEmail(e.target.value)}
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
export default Layout;
