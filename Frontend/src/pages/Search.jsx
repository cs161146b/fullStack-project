import { useState } from "react";
import Ent from "./StylePages/Search.module.css";

const URL = "http://localhost:8080/api/data/search";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function fetchSearch() {
    if (!search.trim()) return;

    try {
      const res = await fetch(`${URL}/${search}`);
      const data = await res.json();

      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  }

  return (
    <div className={Ent.enter}>
      {/* LOGOUT */}
      <button onClick={logout} className={Ent.logout}>
        Logout
      </button>

      {/* SEARCH BAR */}
      <div className={Ent.searchBox}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={fetchSearch}>Search</button>
      </div>

      {/* RESULTS */}
      <div className={Ent.results}>
        {results.length === 0 ? (
          <p className={Ent.noResults}>No results</p>
        ) : (
          results.map((item, index) => (
            <div key={index} className={Ent.card}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <p>
                <strong>Email:</strong> {item.email}
              </p>

              <a href={item.homepage} target="_blank" rel="noreferrer">
                Visit website
              </a>

              <p>
                <strong>Modified:</strong> {item.modified}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
