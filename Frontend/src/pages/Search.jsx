import { useState } from "react";
import Ent from "./StylePages/Search.module.css";
const URL = "http://localhost:8080/api/data/search";
export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function fetchSearch() {
    if (!search) return;
    const res = await fetch(`${URL}/${search}`);
    const data = await res.json();
    console.log(data);
    setResults(data);
  }

  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  }

  return (
    <div className={Ent.enter}>
      <button onClick={logout} className={Ent.logout}>
        Logout
      </button>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => fetchSearch()}>search</button>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
