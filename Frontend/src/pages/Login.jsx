import React from "react";
import styles from "./StylePages/loginStyle.module.css";
import { useState } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:8080/api/data";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Login failed");
        return response.text();
      })
      .then((data) => {
        localStorage.setItem("loggedIn", true);
        navigate("/search");
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed");
      });
  }

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
      <br></br>
    </div>
  );
}
