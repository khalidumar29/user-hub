import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  const [status, setStatus] = useState(false);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(1);
  if (status) {
    fetch(`https://reqres.in/api/users?page=${pages}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }
  return (
    <div className='h-screen '>
      <Header setStatus={setStatus} />
      <Routes>
        <Route
          path='/'
          element={
            <Home users={users.data} setPages={setPages} pages={pages} />
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
