import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import Results from './Components/Results';
import './App.css';
import Leaderboard from './Components/Leaderboard';
import Stats from './Components/Stats';

export default function App() {

  useEffect(() => {
    if (localStorage.getItem('views') === null) {
      localStorage.setItem('views', 0);
    }
  }, []); 

  async function getGrade(num) {
    num = Number(num);
    if (num === 10) {
      return 'AA';
    } else if (num === 9) {
      return 'AB';
    } else if (num === 8) {
      return 'BB';
    } else if (num === 7) {
      return 'BC';
    } else if (num === 6) {
      return 'CC';
    } else if (num === 5) {
      return 'CD';
    } else if (num === 4) {
      return 'DD';
    } else if (num === 0) {
      return 'FF';
    }
  }

  function incrementViews(num) {
    localStorage.setItem('views', Number(localStorage.getItem('views')) + num);
  }

  // async function changeres(res) {
  //   res.emth = await getGrade(res.emth);
  //   res.emlab = await getGrade(res.emlab);
  //   res.chemth = await getGrade(res.chemth);
  //   res.chemlab = await getGrade(res.chemlab);
  //   res.math = await getGrade(res.math);
  //   res.frb2 = await getGrade(res.frb2);
  //   res.iks = await getGrade(res.iks);
  //   res.cppsth = await getGrade(res.cppsth);
  //   res.cppslab = await getGrade(res.cppslab);
  //   res.frb1 = await getGrade(res.frb1);
  //   res.cc = await getGrade(res.cc);
  //   res.dsw = await getGrade(res.dsw);
  //   res.emth = String(res.emth);
  //   res.emlab = String(res.emlab);
  //   res.chemth = String(res.chemth);
  //   res.math = String(res.math);
  //   res.frb2 = String(res.frb2);
  //   res.iks = String(res.iks);
  //   res.cppsth = String(res.cppsth);
  //   res.cppslab = String(res.cppslab);
  //   res.cc = String(res.cc);
  //   res.dsw = String(res.dsw);
  //   res.frb1 = String(res.frb1);
  //   setResult(res);
  //   setShowRes(true);
  //   incrementViews(1);
  // }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Mainpage/>}/>
          <Route exact path="/res" element={<Results/>}/>
          <Route exact path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}
