import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from './components/HomePage/HomePage'
import {ChatPage} from './components/ChatPage/ChatPage'
import { RouteComponentProps } from '@reach/router';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/chats" element={<ChatPage/>}></Route>
        </Routes>    
    </div>
  );
}

export default App;

// const RouterPage = (
//   props: { element: JSX.Element } & RouteComponentProps
// ) => props.element;
