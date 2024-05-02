import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import WordCounter from './WordCounter';
import TextConverter from './TextConverter';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/WordCounter' element={<WordCounter />}></Route>
          <Route path='/TextConverter' element={<TextConverter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
