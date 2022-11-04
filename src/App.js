import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import DetailedCard from "./components/detailed-card/DetailedCard";

function App() {
  const [emp, setEmp] = useState([]);
  const [miniEmp, setMiniEmp] = useState([])

  const introRef = useRef(null);
  const aboutUsRef = useRef(null);
  const scrollIntro = () => introRef.current.scrollIntoView()    
  const scrollAboutUs = () => aboutUsRef.current.scrollIntoView()    

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEmp(data);
        setMiniEmp(data.map(({id, name, username, website}) => ({
          id: id,
          name: name,
          username: "@" + username,
          website: website
        })))
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Router>
        <Header scrollIntro={scrollIntro} scrollAboutUs={scrollAboutUs}/>
        <Routes>
          <Route path="/" element={<Intro miniEmp={miniEmp} introRef={introRef} aboutUsRef={aboutUsRef}/>}></Route>
          <Route path="/about-us/:id" element={<DetailedCard emp={emp}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
