import styles from "./StylePages/RegistryStyle.module.css";
import { useEffect, useState } from "react";

export default function Registry() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const URL = "http://localhost:8080/api/users/register";

  async function send(e) {
    e.preventDefault();

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      alert("Users created succesfully");
    } else {
      alert("Error creating user");
    }
  }

  return (
    <div className={styles.registry}>
      <form>
        <label>Username:</label>
        <br></br>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </form>
      <button
        onClick={(e) => {
          send(e);
        }}
      >
        save
      </button>
      <input
        className={styles.visible}
        id="visibility"
        type="checkbox"
        onClick={() => {
          visibility();
        }}
      />
      show password
    </div>
  );
}
