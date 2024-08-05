import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Load from "./components/Load";

function App() {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fectchData() {
      const nasa_key = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${nasa_key}`;

      const today = new Date().toDateString();
      const localKey = `NASA_${today}`;

      if (localStorage.getItem(localKey)) {
        let dataFetched = localStorage.getItem(localKey);
        dataFetched = JSON.parse(dataFetched);
        setData(dataFetched);
        console.log("Fetched from cache today.");
        return;
      }
      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today.");
      } catch (error) {
        console.log(error);
      }
    }
    fectchData();
  }, []);

  return (
    <>
      {data ? <Main data={data} /> : <Load />}
      {showModal && <SideBar data={data} onHandleShowModal={handleShowModal} />}
      {data && <Footer data={data} onHandleShowModal={handleShowModal} />}
    </>
  );
}

export default App;

// {condition && <TrueComponent />}
// {showModal && <SideBar />}:
// Nếu showModal là true thì <SideBar /> sẽ được hiển thị.
// Nếu là showModal là false thì <SideBar /> sẽ không được hiển thị.

// Trong React, việc sử dụng dấu {} để viết JavaScript code trong JSX (HTML-like syntax của React) là rất phổ biến.
// Đây là một trong những đặc điểm của JSX.
// 1. Nhúng biểu thức JavaScript
// 2. Sử dụng biến JavaScript
// 3. Gọi hàm JavaScript
// 4. Truyền props
// 5. Sử dụng toán tử điều kiện
