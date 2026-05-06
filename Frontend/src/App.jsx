import Login from "./pages/Login";
import Registry from "./pages/registry";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./pages/StylePages/AppStyle.module.css";
import Search from "./pages/Search";
function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("login");
  return isLogin ? children : <Navigate to="/"></Navigate>;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Registry" element={<Registry></Registry>}></Route>
        <Route path="/Search" element={<Search></Search>}></Route>
      </Routes>
      <nav className={styles.nav}>
        <Link to="/Registry">Registry</Link>
      </nav>
    </BrowserRouter>
  );
}

export default App;
