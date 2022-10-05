import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Game from './components/Game';
import Chat from './components/Chat';
import { Link, Route, Routes } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const background = {
  backgroundColor: '#cacaca',
  width: '100%',
  maxWidth: 'inherit',
  minHeight: '100vh',
  backgroundPosition: 'absolute'
}

function App() {
  return (
    <div style={background}>
      <div className='header'>
        <Link className='nav-item' to="/"><h1>Henry's Bizzar place</h1></Link>
        <nav>
          <ul className={ListGroup} id='nav-list'>
            <li className={ListGroupItem} id='animate-one'>
              <Link className="nav-item" to="/">Home</Link>
            </li>
            <li className={ListGroupItem} id='animate-two'>
              <Link className="nav-item" to="/game">Game</Link>
            </li>
            <li className={ListGroupItem} id='animate-three'>
              <Link className="nav-item" to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/game" element={<Game />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;