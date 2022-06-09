import './App.css';
import React, { useState } from "react";
import data from "./data.json";

const App = () =>{
  const [client, setClient] = useState(data);

  return (
  <div className = "app">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Age</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {client.map((client) => (
          <tr>
            <a href = "additionalinfo">
            <td>{client.id}</td>
            </a>
            <td>{client.age}</td>
            <td>{client.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default App;