import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable.jsx";
import Stats from "./components/Stats.jsx";
import axios from "axios";

function App() {
  const [rows, setRows] = useState([]);
  function getUserData() {
    axios.get("https://gorest.co.in/public/v2/users").then((res) => {
      // console.log(res);
      //   console.log(res.datasort((a, b) => (a.name > b.name ? -1 : 1)));
      setRows(res.data);
      // console.log(res.data);
    });
  }
  // console.log(rows);
  useEffect(getUserData, []);
  
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        paddingTop: "40px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgb(231, 235, 240)",
      }}
    >
      <EmployeeTable data={rows} />
        
        <div
        style={{
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        backgroundColor: "rgb(231, 235, 240)",
      }}
        >
        <Stats gender={true} one={rows.filter((row) => {return row.gender === "male"}).length} all={rows.length} />
        <Stats gender={false} one={rows.filter((row) => {return row.status === "active"}).length} all={rows.length} />
        </div>

    </div>
  );
}

export default App;
