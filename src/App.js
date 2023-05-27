import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div>
      <center>
        <h4>Food App</h4>
        <form onSubmit={onSubmitHandler}>
          <input type="text" value={search} onChange={onChangeHandler} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
}

export default App;
